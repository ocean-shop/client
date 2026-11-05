import { LOGIN_CODE_LENGTH } from "@/app/(pages)/login/constants/login.constants";
import { Button } from "@/app/ui/button/button";
import { MaterialIcon } from "@/app/ui/material-icon/material-icon";
import { LoginCodeCells } from "./components/login-code-cells/login-code-cells";
import { LoginCodeResend } from "./components/login-code-resend/login-code-resend";
import { LoginCodeSentNotice } from "./components/login-code-sent-notice/login-code-sent-notice";
import { LoginCodeStatusMessage } from "./components/login-code-status-message/login-code-status-message";
import {
  LOGIN_CODE_STEP_BACK_LABEL,
  LOGIN_CODE_STEP_KIND_LABELS,
  LOGIN_CODE_STEP_SUBMIT_LABEL,
  LOGIN_CODE_STEP_TITLE,
  LOGIN_CODE_STEP_VALIDITY,
  LOGIN_CODE_STEP_VERIFYING_LABEL,
} from "./constants/login-code-step.constants";
import type { LoginCodeStepProps } from "./types/login-code-step.types";

export const LoginCodeStep = ({
  identifier,
  identifierKind,
  code,
  status,
  attemptsLeft,
  secondsLeft,
  isResending,
  isVerifying,
  onCodeChange,
  onConfirm,
  onResend,
  onBack,
}: LoginCodeStepProps) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onConfirm();
  };

  return (
    <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-5 lg:gap-6">
      <Button
        variant="text"
        size="auto"
        onClick={onBack}
        className="!gap-1 self-start text-[13.5px] hover:text-accent-dark"
      >
        <MaterialIcon name="arrow_back" className="text-[18px] font-normal" />
        {LOGIN_CODE_STEP_BACK_LABEL} {LOGIN_CODE_STEP_KIND_LABELS[identifierKind]}
      </Button>

      <LoginCodeSentNotice identifier={identifier} identifierKind={identifierKind} />

      <div className="flex flex-col gap-2">
        <h1 className="font-heading text-xl font-semibold tracking-[-0.02em] text-foreground lg:text-[22px]">
          {LOGIN_CODE_STEP_TITLE}
        </h1>
        <p className="text-sm text-muted">{LOGIN_CODE_STEP_VALIDITY}</p>
      </div>

      <LoginCodeCells code={code} status={status} onChange={onCodeChange} />

      <LoginCodeStatusMessage status={status} attemptsLeft={attemptsLeft} />

      <Button
        type="submit"
        size="xl"
        disabled={code.length < LOGIN_CODE_LENGTH || status !== "idle" || isVerifying}
      >
        {isVerifying ? LOGIN_CODE_STEP_VERIFYING_LABEL : LOGIN_CODE_STEP_SUBMIT_LABEL}
      </Button>

      <LoginCodeResend secondsLeft={secondsLeft} isResending={isResending} onResend={onResend} />
    </form>
  );
};
