"use client";

import { useEffect, useState } from "react";
import {
  LOGIN_CODE_LENGTH,
  LOGIN_CODE_MAX_ATTEMPTS,
  LOGIN_RESEND_DELAY_SECONDS,
} from "../../constants/login.constants";
import { getLoginIdentifierKindHelper } from "../../helpers/get-login-identifier-kind";
import type { LoginCodeStatus, LoginIdentifierKind, LoginStep } from "../../types/login.types";
import { LoginCodeStep } from "./components/login-code-step/login-code-step";
import { LoginIdentifierStep } from "./components/login-identifier-step/login-identifier-step";
import { LOGIN_IDENTIFIER_STEP_ERROR } from "./components/login-identifier-step/constants/login-identifier-step.constants";
import { LOGIN_VIEW_CARD_CLASS_NAME } from "./constants/login-view.constants";

export function LoginView() {
  const [step, setStep] = useState<LoginStep>("identifier");
  const [identifier, setIdentifier] = useState("");
  const [identifierKind, setIdentifierKind] = useState<LoginIdentifierKind>("email");
  const [identifierError, setIdentifierError] = useState<string | null>(null);
  const [code, setCode] = useState("");
  const [codeStatus, setCodeStatus] = useState<LoginCodeStatus>("idle");
  const [attemptsLeft, setAttemptsLeft] = useState(LOGIN_CODE_MAX_ATTEMPTS);
  const [secondsLeft, setSecondsLeft] = useState(0);

  useEffect(() => {
    if (step !== "code" || secondsLeft <= 0) return;

    const timeout = setTimeout(() => setSecondsLeft((seconds) => seconds - 1), 1000);

    return () => clearTimeout(timeout);
  }, [step, secondsLeft]);

  function startCodeStep() {
    setCode("");
    setCodeStatus("idle");
    setAttemptsLeft(LOGIN_CODE_MAX_ATTEMPTS);
    setSecondsLeft(LOGIN_RESEND_DELAY_SECONDS);
  }

  function handleIdentifierChange(value: string) {
    setIdentifier(value);
    setIdentifierError(null);
  }

  // TODO: request the one-time code from the backend once the auth endpoints exist.
  function handleIdentifierSubmit() {
    const kind = getLoginIdentifierKindHelper(identifier);

    if (!kind) {
      setIdentifierError(LOGIN_IDENTIFIER_STEP_ERROR);
      return;
    }

    setIdentifier(identifier.trim());
    setIdentifierKind(kind);
    startCodeStep();
    setStep("code");
  }

  function handleCodeChange(value: string) {
    setCode(value);
    if (codeStatus === "invalid") setCodeStatus("idle");
  }

  // TODO: verify the code with the backend; a rejection should decrement `attemptsLeft` and set
  // the `invalid` status.
  function handleCodeConfirm() {
    if (code.length < LOGIN_CODE_LENGTH || codeStatus === "verified") return;

    setCodeStatus("verified");
  }

  return (
    <div className={LOGIN_VIEW_CARD_CLASS_NAME}>
      {step === "identifier" ? (
        <LoginIdentifierStep
          value={identifier}
          error={identifierError}
          onChange={handleIdentifierChange}
          onSubmit={handleIdentifierSubmit}
        />
      ) : (
        <LoginCodeStep
          identifier={identifier}
          identifierKind={identifierKind}
          code={code}
          status={codeStatus}
          attemptsLeft={attemptsLeft}
          secondsLeft={secondsLeft}
          onCodeChange={handleCodeChange}
          onConfirm={handleCodeConfirm}
          onResend={startCodeStep}
          onBack={() => setStep("identifier")}
        />
      )}
    </div>
  );
}
