import type { LoginCodeStatus } from "@/app/(pages)/login/types/login.types";

export type LoginCodeCellsProps = {
  code: string;
  status: LoginCodeStatus;
  onChange: (value: string) => void;
};

export type LoginCodeCellState = "empty" | "active" | "filled" | "invalid" | "verified";
