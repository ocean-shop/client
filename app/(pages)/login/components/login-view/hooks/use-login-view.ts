"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { favoritesStore } from "@/app/shared/favorites/favorites-store";
import { getLoginIdentifierKindHelper } from "../../../helpers/get-login-identifier-kind";
import { normalizeLoginIdentifierHelper } from "../../../helpers/normalize-login-identifier";
import type { LoginIdentifierKind, LoginStep } from "../../../types/login.types";
import { LOGIN_IDENTIFIER_ERROR } from "../constants/login-view.constants";
import { requestLoginOtpHelper } from "../helpers/request-login-otp";
import { useLoginCode } from "./use-login-code";
import { useLoginResendCountdown } from "./use-login-resend-countdown";

/** Walks the visitor from the email or phone to the one-time code and on to `redirectTo`. */
export const useLoginView = (redirectTo: string) => {
  const router = useRouter();
  const [step, setStep] = useState<LoginStep>("identifier");
  const [identifier, setIdentifier] = useState("");
  const [identifierKind, setIdentifierKind] = useState<LoginIdentifierKind>("email");
  const [identifierError, setIdentifierError] = useState<string | null>(null);
  const [isRequesting, setIsRequesting] = useState(false);
  const { secondsLeft, restartCountdown } = useLoginResendCountdown(step === "code");
  const { resetCode, ...codeState } = useLoginCode({
    login: identifier,
    onVerified: () => {
      favoritesStore.reset();
      router.replace(redirectTo);
    },
  });

  const requestOtp = async (login: string) => {
    setIsRequesting(true);
    const isSent = await requestLoginOtpHelper(login);
    setIsRequesting(false);

    if (isSent) {
      resetCode();
      restartCountdown();
    }

    return isSent;
  };

  const handleIdentifierChange = (value: string) => {
    setIdentifier(value);
    setIdentifierError(null);
  };

  const handleIdentifierSubmit = async () => {
    if (isRequesting) return;

    const kind = getLoginIdentifierKindHelper(identifier);

    if (!kind) {
      setIdentifierError(LOGIN_IDENTIFIER_ERROR);
      return;
    }

    const login = normalizeLoginIdentifierHelper(identifier, kind);

    if (!(await requestOtp(login))) return;

    setIdentifier(login);
    setIdentifierKind(kind);
    setStep("code");
  };

  const handleResend = async () => {
    if (!isRequesting) await requestOtp(identifier);
  };

  const handleBack = () => setStep("identifier");

  return {
    ...codeState,
    step,
    identifier,
    identifierKind,
    identifierError,
    isRequesting,
    secondsLeft,
    handleIdentifierChange,
    handleIdentifierSubmit,
    handleResend,
    handleBack,
  };
};
