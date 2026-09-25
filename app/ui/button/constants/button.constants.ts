import type { ButtonSize, ButtonVariant } from "../types/button.types";

export const BUTTON_DEFAULT_VARIANT: ButtonVariant = "primary";
export const BUTTON_DEFAULT_SIZE: ButtonSize = "md";

export const BUTTON_BASE_CLASSNAME =
  "inline-flex items-center justify-center gap-2 transition-colors disabled:pointer-events-none disabled:opacity-50";

export const BUTTON_VARIANT_CLASSNAMES: Record<ButtonVariant, string> = {
  primary: "bg-accent font-semibold text-white hover:bg-accent-dark",
  "primary-inverse": "bg-white font-semibold text-accent hover:bg-accent-soft",
  outline:
    "border border-footer-border bg-background font-semibold text-foreground hover:border-accent",
  soft: "bg-accent-soft font-semibold text-accent-dark",
  ghost: "bg-transparent text-muted-light",
  text: "bg-transparent p-0 font-semibold text-accent",
  unstyled: "",
};

export const BUTTON_SIZE_CLASSNAMES: Record<ButtonSize, string> = {
  sm: "h-10 rounded-[10px] px-3 text-sm",
  md: "h-[42px] rounded-[10px] px-3.5 text-sm",
  lg: "h-[50px] rounded-[10px] px-[26px] text-[15px]",
  icon: "h-10 w-10 rounded-[10px] p-0",
  auto: "",
};
