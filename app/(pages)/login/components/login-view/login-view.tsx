"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  API_ERROR_MESSAGES,
  DEFAULT_API_ERROR_MESSAGE,
} from "@/app/core/api/constants/api.constants";
import { toastStore } from "@/app/core/providers/toast-provider/toast-store";
import { requestClientOtpAction } from "@/app/shared/auth/actions/request-client-otp";
import { verifyClientOtpAction } from "@/app/shared/auth/actions/verify-client-otp";
import {
  LOGIN_CODE_LENGTH,
  LOGIN_CODE_MAX_ATTEMPTS,
  LOGIN_INVALID_CODE_API_MESSAGE,
  LOGIN_REQUEST_OTP_ERROR_TOAST_TITLE,
  LOGIN_RESEND_DELAY_SECONDS,
  LOGIN_VERIFY_OTP_ERROR_TOAST_TITLE,
} from "../../constants/login.constants";
import { getLoginIdentifierKindHelper } from "../../helpers/get-login-identifier-kind";
import { normalizeLoginIdentifierHelper } from "../../helpers/normalize-login-identifier";
import type { LoginCodeStatus, LoginIdentifierKind, LoginStep } from "../../types/login.types";
import { LoginCodeStep } from "./components/login-code-step/login-code-step";
import { LoginIdentifierStep } from "./components/login-identifier-step/login-identifier-step";
import { LOGIN_IDENTIFIER_STEP_ERROR } from "./components/login-identifier-step/constants/login-identifier-step.constants";
import { LOGIN_VIEW_CARD_CLASS_NAME } from "./constants/login-view.constants";
import type { LoginViewProps } from "./types/login-view.types";

export function LoginView({ redirectTo }: LoginViewProps) {
  const router = useRouter();
  const [step, setStep] = useState<LoginStep>("identifier");
  const [identifier, setIdentifier] = useState("");
  const [identifierKind, setIdentifierKind] = useState<LoginIdentifierKind>("email");
  const [identifierError, setIdentifierError] = useState<string | null>(null);
  const [code, setCode] = useState("");
  const [codeStatus, setCodeStatus] = useState<LoginCodeStatus>("idle");
  const [attemptsLeft, setAttemptsLeft] = useState(LOGIN_CODE_MAX_ATTEMPTS);
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [isRequesting, setIsRequesting] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);

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

  /** Resolves to whether the code was sent; failures are reported with a toast. */
  async function requestOtp(login: string) {
    setIsRequesting(true);

    try {
      const result = await requestClientOtpAction({ login });

      if (!result.ok) {
        toastStore.error(
          LOGIN_REQUEST_OTP_ERROR_TOAST_TITLE,
          API_ERROR_MESSAGES[result.status] ?? DEFAULT_API_ERROR_MESSAGE
        );
        return false;
      }

      return true;
    } catch {
      toastStore.error(LOGIN_REQUEST_OTP_ERROR_TOAST_TITLE, DEFAULT_API_ERROR_MESSAGE);
      return false;
    } finally {
      setIsRequesting(false);
    }
  }

  function handleIdentifierChange(value: string) {
    setIdentifier(value);
    setIdentifierError(null);
  }

  async function handleIdentifierSubmit() {
    if (isRequesting) return;

    const kind = getLoginIdentifierKindHelper(identifier);

    if (!kind) {
      setIdentifierError(LOGIN_IDENTIFIER_STEP_ERROR);
      return;
    }

    const login = normalizeLoginIdentifierHelper(identifier, kind);

    if (!(await requestOtp(login))) return;

    setIdentifier(login);
    setIdentifierKind(kind);
    startCodeStep();
    setStep("code");
  }

  async function handleResend() {
    if (isRequesting) return;

    if (await requestOtp(identifier)) startCodeStep();
  }

  function handleCodeChange(value: string) {
    setCode(value);
    if (codeStatus === "invalid") setCodeStatus("idle");
  }

  /** A mistyped code is shown inline; expired, blocked and other failures go to a toast. */
  async function handleCodeConfirm() {
    if (code.length < LOGIN_CODE_LENGTH || codeStatus !== "idle" || isVerifying) return;

    setIsVerifying(true);

    try {
      const result = await verifyClientOtpAction({ login: identifier, code });

      if (result.ok) {
        setCodeStatus("verified");
        router.replace(redirectTo);
        return;
      }

      if (result.message === LOGIN_INVALID_CODE_API_MESSAGE) {
        setAttemptsLeft((attempts) => Math.max(attempts - 1, 0));
        setCodeStatus("invalid");
        return;
      }

      toastStore.error(
        LOGIN_VERIFY_OTP_ERROR_TOAST_TITLE,
        (result.status < 500 && result.message) ||
          (API_ERROR_MESSAGES[result.status] ?? DEFAULT_API_ERROR_MESSAGE)
      );
    } catch {
      toastStore.error(LOGIN_VERIFY_OTP_ERROR_TOAST_TITLE, DEFAULT_API_ERROR_MESSAGE);
    } finally {
      setIsVerifying(false);
    }
  }

  return (
    <div className={LOGIN_VIEW_CARD_CLASS_NAME}>
      {step === "identifier" ? (
        <LoginIdentifierStep
          value={identifier}
          error={identifierError}
          isRequesting={isRequesting}
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
          isResending={isRequesting}
          isVerifying={isVerifying}
          onCodeChange={handleCodeChange}
          onConfirm={handleCodeConfirm}
          onResend={handleResend}
          onBack={() => setStep("identifier")}
        />
      )}
    </div>
  );
}
