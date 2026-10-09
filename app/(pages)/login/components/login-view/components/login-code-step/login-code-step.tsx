import {
  LOGIN_CODE_LENGTH,
  LOGIN_IDENTIFIER_KIND_SENT_TO_LABELS,
  LOGIN_IDENTIFIER_KIND_SHORT_LABELS,
} from "@/app/(pages)/login/constants/login.constants";
import { formatLoginTimerHelper } from "@/app/(pages)/login/helpers/format-login-timer";
import { Button } from "@/app/ui/button/button";
import { LoginCodeCells } from "./components/login-code-cells/login-code-cells";
import {
  LOGIN_CODE_STEP_BACK_LABEL,
  LOGIN_CODE_STEP_INVALID_DESCRIPTION,
  LOGIN_CODE_STEP_INVALID_TITLE,
  LOGIN_CODE_STEP_RESEND_LABEL,
  LOGIN_CODE_STEP_RESEND_WAIT_LABEL,
  LOGIN_CODE_STEP_SENT_LABEL,
  LOGIN_CODE_STEP_SUBMIT_LABEL,
  LOGIN_CODE_STEP_TITLE,
  LOGIN_CODE_STEP_VALIDITY,
  LOGIN_CODE_STEP_VERIFIED_LABEL,
} from "./constants/login-code-step.constants";
import type { LoginCodeStepProps } from "./types/login-code-step.types";

export function LoginCodeStep({
  identifier,
  identifierKind,
  code,
  status,
  attemptsLeft,
  secondsLeft,
  onCodeChange,
  onConfirm,
  onResend,
  onBack,
}: LoginCodeStepProps) {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onConfirm();
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-5 lg:gap-6">
      <Button
        variant="text"
        size="auto"
        onClick={onBack}
        className="!gap-1 self-start text-[13.5px] hover:text-accent-dark"
      >
        <span aria-hidden className="font-symbols text-[18px] font-normal">
          arrow_back
        </span>
        {LOGIN_CODE_STEP_BACK_LABEL} {LOGIN_IDENTIFIER_KIND_SHORT_LABELS[identifierKind]}
      </Button>

      <div className="flex items-start gap-3 rounded-xl bg-accent-soft px-4 py-3.5">
        <span aria-hidden className="font-symbols text-[22px] text-accent">
          mark_email_read
        </span>
        <p className="min-w-0 break-words text-sm leading-normal text-accent-dark">
          <b className="font-semibold">{LOGIN_CODE_STEP_SENT_LABEL}</b>{" "}
          {LOGIN_IDENTIFIER_KIND_SENT_TO_LABELS[identifierKind]}{" "}
          <b className="font-semibold">{identifier}</b>
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="font-heading text-xl font-semibold tracking-[-0.02em] text-foreground lg:text-[22px]">
          {LOGIN_CODE_STEP_TITLE}
        </h1>
        <p className="text-sm text-muted">{LOGIN_CODE_STEP_VALIDITY}</p>
      </div>

      <LoginCodeCells code={code} status={status} onChange={onCodeChange} />

      {status === "invalid" && (
        <div
          role="alert"
          className="flex items-start gap-2 text-[13.5px] leading-[1.45] text-error-dark"
        >
          <span aria-hidden className="font-symbols text-[18px]">
            error
          </span>
          <span>
            <b className="font-semibold">{LOGIN_CODE_STEP_INVALID_TITLE}</b>{" "}
            {LOGIN_CODE_STEP_INVALID_DESCRIPTION} {attemptsLeft}
          </span>
        </div>
      )}

      {status === "verified" && (
        <span
          role="status"
          className="flex items-center gap-1.5 text-[13.5px] font-medium text-accent"
        >
          <span aria-hidden className="font-symbols text-[18px]">
            check_circle
          </span>
          {LOGIN_CODE_STEP_VERIFIED_LABEL}
        </span>
      )}

      <Button
        type="submit"
        size="auto"
        disabled={code.length < LOGIN_CODE_LENGTH || status !== "idle"}
        className="h-[52px] rounded-xl text-[15px]"
      >
        {LOGIN_CODE_STEP_SUBMIT_LABEL}
      </Button>

      <div className="flex justify-center text-[13.5px] text-muted">
        {secondsLeft > 0 ? (
          <span>
            {LOGIN_CODE_STEP_RESEND_WAIT_LABEL}{" "}
            <b className="font-semibold text-foreground">{formatLoginTimerHelper(secondsLeft)}</b>
          </span>
        ) : (
          <Button
            variant="text"
            size="auto"
            onClick={onResend}
            className="text-[13.5px] hover:text-accent-dark"
          >
            {LOGIN_CODE_STEP_RESEND_LABEL}
          </Button>
        )}
      </div>
    </form>
  );
}
