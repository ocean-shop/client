import type { LoginCodeStatus } from "@/app/(pages)/login/types/login.types";

export type LoginCodeStatusMessageProps = {
  status: LoginCodeStatus;
  attemptsLeft: number;
};
