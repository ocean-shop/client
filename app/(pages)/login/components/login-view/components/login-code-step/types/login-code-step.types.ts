import type { LoginCodeStatus, LoginIdentifierKind } from "@/app/(pages)/login/types/login.types";

export type LoginCodeStepProps = {
  identifier: string;
  identifierKind: LoginIdentifierKind;
  code: string;
  status: LoginCodeStatus;
  attemptsLeft: number;
  secondsLeft: number;
  onCodeChange: (value: string) => void;
  onConfirm: () => void;
  onResend: () => void;
  onBack: () => void;
};
