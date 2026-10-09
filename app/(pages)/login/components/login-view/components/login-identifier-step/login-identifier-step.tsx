import { getLoginIdentifierKindHelper } from "@/app/(pages)/login/helpers/get-login-identifier-kind";
import { Button } from "@/app/ui/button/button";
import { Input } from "@/app/ui/input/input";
import {
  LOGIN_IDENTIFIER_STEP_DEFAULT_ICON,
  LOGIN_IDENTIFIER_STEP_DESCRIPTION,
  LOGIN_IDENTIFIER_STEP_FIELD_CLASS_NAME,
  LOGIN_IDENTIFIER_STEP_FIELD_STATE_CLASS_NAMES,
  LOGIN_IDENTIFIER_STEP_ICONS,
  LOGIN_IDENTIFIER_STEP_LABEL,
  LOGIN_IDENTIFIER_STEP_PLACEHOLDER,
  LOGIN_IDENTIFIER_STEP_SUBMIT_LABEL,
  LOGIN_IDENTIFIER_STEP_TERMS,
  LOGIN_IDENTIFIER_STEP_TITLE,
} from "./constants/login-identifier-step.constants";
import type { LoginIdentifierStepProps } from "./types/login-identifier-step.types";

export function LoginIdentifierStep({
  value,
  error,
  onChange,
  onSubmit,
}: LoginIdentifierStepProps) {
  const kind = getLoginIdentifierKindHelper(value);
  const icon = kind ? LOGIN_IDENTIFIER_STEP_ICONS[kind] : LOGIN_IDENTIFIER_STEP_DEFAULT_ICON;

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit();
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-5 lg:gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="font-heading text-[22px] font-semibold tracking-[-0.025em] text-foreground lg:text-[26px]">
          {LOGIN_IDENTIFIER_STEP_TITLE}
        </h1>
        <p className="text-[14.5px] leading-[1.55] text-pretty text-muted">
          {LOGIN_IDENTIFIER_STEP_DESCRIPTION}
        </p>
      </div>

      <label className="flex flex-col gap-1.5">
        <span className="text-[13px] font-medium text-muted">{LOGIN_IDENTIFIER_STEP_LABEL}</span>
        <div
          className={`${LOGIN_IDENTIFIER_STEP_FIELD_CLASS_NAME} ${
            LOGIN_IDENTIFIER_STEP_FIELD_STATE_CLASS_NAMES[error ? "error" : "default"]
          }`}
        >
          <span aria-hidden className="font-symbols text-[20px] text-muted-light">
            {icon}
          </span>
          <Input
            variant="ghost"
            size="auto"
            type="text"
            inputMode="email"
            autoComplete="username"
            autoFocus
            value={value}
            onChange={(event) => onChange(event.target.value)}
            placeholder={LOGIN_IDENTIFIER_STEP_PLACEHOLDER}
            aria-invalid={Boolean(error)}
            className="h-full flex-1 text-[15px]"
          />
        </div>
        {error && <span className="text-[13px] text-error-dark">{error}</span>}
      </label>

      <Button type="submit" size="auto" className="h-[52px] rounded-xl text-[15px]">
        {LOGIN_IDENTIFIER_STEP_SUBMIT_LABEL}
        <span aria-hidden className="font-symbols text-[19px] font-normal">
          arrow_forward
        </span>
      </Button>

      <p className="text-center text-[12.5px] leading-normal text-muted-light">
        {LOGIN_IDENTIFIER_STEP_TERMS}
      </p>
    </form>
  );
}
