import type { InputSize } from "../types/input.types";

export const INPUT_DEFAULT_SIZE: InputSize = "md";

export const INPUT_BASE_CLASSNAME =
  "w-full min-w-0 rounded-[10px] border border-footer-border bg-surface-soft text-foreground placeholder:text-muted-light";

export const INPUT_SIZE_CLASSNAMES: Record<InputSize, string> = {
  sm: "h-[36px] px-2.5 text-sm",
  md: "h-[42px] px-3 text-sm",
  lg: "h-[48px] px-3.5 text-base",
};
