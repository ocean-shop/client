import { Button } from "@/app/ui/button/button";
import {
  LOGIN_CODE_RESEND_LABEL,
  LOGIN_CODE_RESEND_WAIT_LABEL,
  LOGIN_CODE_RESENDING_LABEL,
} from "./constants/login-code-resend.constants";
import { formatLoginTimerHelper } from "./helpers/format-login-timer";
import type { LoginCodeResendProps } from "./types/login-code-resend.types";

/** The countdown until another code may be requested, then the button that requests it. */
export const LoginCodeResend = ({ secondsLeft, isResending, onResend }: LoginCodeResendProps) => {
  return (
    <div className="flex justify-center text-[13.5px] text-muted">
      {secondsLeft > 0 ? (
        <span>
          {LOGIN_CODE_RESEND_WAIT_LABEL}{" "}
          <b className="font-semibold text-foreground">{formatLoginTimerHelper(secondsLeft)}</b>
        </span>
      ) : (
        <Button
          variant="text"
          size="auto"
          onClick={onResend}
          disabled={isResending}
          className="text-[13.5px] hover:text-accent-dark"
        >
          {isResending ? LOGIN_CODE_RESENDING_LABEL : LOGIN_CODE_RESEND_LABEL}
        </Button>
      )}
    </div>
  );
};
