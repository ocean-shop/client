"use client";

import { LoginCodeStep } from "./components/login-code-step/login-code-step";
import { LoginIdentifierStep } from "./components/login-identifier-step/login-identifier-step";
import { LOGIN_VIEW_CARD_CLASS_NAME } from "./constants/login-view.constants";
import { useLoginView } from "./hooks/use-login-view";
import type { LoginViewProps } from "./types/login-view.types";

export const LoginView = ({ redirectTo }: LoginViewProps) => {
  const login = useLoginView(redirectTo);

  return (
    <div className={LOGIN_VIEW_CARD_CLASS_NAME}>
      {login.step === "identifier" ? (
        <LoginIdentifierStep
          value={login.identifier}
          error={login.identifierError}
          isRequesting={login.isRequesting}
          onChange={login.handleIdentifierChange}
          onSubmit={login.handleIdentifierSubmit}
        />
      ) : (
        <LoginCodeStep
          identifier={login.identifier}
          identifierKind={login.identifierKind}
          code={login.code}
          status={login.codeStatus}
          attemptsLeft={login.attemptsLeft}
          secondsLeft={login.secondsLeft}
          isResending={login.isRequesting}
          isVerifying={login.isVerifying}
          onCodeChange={login.handleCodeChange}
          onConfirm={login.handleCodeConfirm}
          onResend={login.handleResend}
          onBack={login.handleBack}
        />
      )}
    </div>
  );
};
