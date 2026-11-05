"use client";

import { useEffect, useState } from "react";
import {
  LOGIN_RESEND_DELAY_SECONDS,
  LOGIN_RESEND_TICK_MS,
} from "../constants/login-view.constants";

/** Seconds until another code may be requested; only ticks while `isActive`. */
export const useLoginResendCountdown = (isActive: boolean) => {
  const [secondsLeft, setSecondsLeft] = useState(0);

  useEffect(() => {
    if (!isActive || secondsLeft <= 0) return;

    const timeout = setTimeout(
      () => setSecondsLeft((seconds) => seconds - 1),
      LOGIN_RESEND_TICK_MS
    );

    return () => clearTimeout(timeout);
  }, [isActive, secondsLeft]);

  const restartCountdown = () => setSecondsLeft(LOGIN_RESEND_DELAY_SECONDS);

  return { secondsLeft, restartCountdown };
};
