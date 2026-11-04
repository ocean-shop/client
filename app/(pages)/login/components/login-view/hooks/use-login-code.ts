"use client";

import { useState } from "react";
import { LOGIN_CODE_LENGTH } from "../../../constants/login.constants";
import type { LoginCodeStatus } from "../../../types/login.types";
import { LOGIN_CODE_MAX_ATTEMPTS } from "../constants/login-view.constants";
import { verifyLoginCodeHelper } from "../helpers/verify-login-code";
import type { UseLoginCodeParams } from "../types/login-view.types";

/** The typed code, its verification and the attempts left before the backend blocks it. */
export const useLoginCode = ({ login, onVerified }: UseLoginCodeParams) => {
  const [code, setCode] = useState("");
  const [codeStatus, setCodeStatus] = useState<LoginCodeStatus>("idle");
  const [attemptsLeft, setAttemptsLeft] = useState(LOGIN_CODE_MAX_ATTEMPTS);
  const [isVerifying, setIsVerifying] = useState(false);

  const resetCode = () => {
    setCode("");
    setCodeStatus("idle");
    setAttemptsLeft(LOGIN_CODE_MAX_ATTEMPTS);
  };

  const handleCodeChange = (value: string) => {
    setCode(value);
    if (codeStatus === "invalid") setCodeStatus("idle");
  };

  const handleCodeConfirm = async () => {
    if (code.length < LOGIN_CODE_LENGTH || codeStatus !== "idle" || isVerifying) return;

    setIsVerifying(true);
    const outcome = await verifyLoginCodeHelper(login, code);
    setIsVerifying(false);

    if (outcome === "verified") {
      setCodeStatus("verified");
      onVerified();
    }

    if (outcome === "invalid") {
      setAttemptsLeft((attempts) => Math.max(attempts - 1, 0));
      setCodeStatus("invalid");
    }
  };

  return {
    code,
    codeStatus,
    attemptsLeft,
    isVerifying,
    resetCode,
    handleCodeChange,
    handleCodeConfirm,
  };
};
