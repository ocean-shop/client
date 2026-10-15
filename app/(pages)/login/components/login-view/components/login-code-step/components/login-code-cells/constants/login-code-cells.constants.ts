import type { LoginCodeCellState } from "../types/login-code-cells.types";

export const LOGIN_CODE_CELLS_INPUT_LABEL = "Код підтвердження";

export const LOGIN_CODE_CELL_CLASS_NAME =
  "flex h-[54px] items-center justify-center rounded-xl border-[1.5px] font-heading text-[21px] font-semibold transition-colors lg:h-[60px] lg:text-2xl";

export const LOGIN_CODE_CELL_STATE_CLASS_NAMES: Record<LoginCodeCellState, string> = {
  empty: "border-footer-border bg-background text-foreground",
  active: "border-accent bg-background text-foreground",
  filled: "border-footer-border bg-surface-soft text-foreground",
  invalid: "border-error-dark bg-background text-error-dark",
  verified: "border-accent bg-accent-soft text-accent-dark",
};
