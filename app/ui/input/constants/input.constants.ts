import type { InputSize, InputVariant } from "../types/input.types";

export const INPUT_DEFAULT_SIZE: InputSize = "md";
export const INPUT_DEFAULT_VARIANT: InputVariant = "soft";

export const INPUT_BASE_CLASSNAME =
  "w-full min-w-0 border border-footer-border text-foreground placeholder:text-muted-light";

export const INPUT_VARIANT_CLASSNAMES: Record<InputVariant, string> = {
  soft: "rounded-[10px] bg-surface-soft",
  outline:
    "rounded-[11px] bg-background outline-none transition-shadow focus:border-accent focus:ring-[3px] focus:ring-accent/12",
};

export const INPUT_SIZE_CLASSNAMES: Record<InputSize, string> = {
  sm: "h-[36px] px-2.5 text-sm",
  md: "h-[42px] px-3 text-sm",
  lg: "h-[48px] px-3.5 text-base",
  xl: "h-[46px] px-3.5 text-[14.5px]",
};
