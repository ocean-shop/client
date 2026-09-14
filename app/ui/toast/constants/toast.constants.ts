import type { ToastVariant } from "../types/toast.types";

export const TOAST_VARIANT_STYLES: Record<
  ToastVariant,
  { icon: string; iconBg: string; fg: string; border: string }
> = {
  error: {
    icon: "error",
    iconBg: "bg-error",
    fg: "text-error-dark",
    border: "border-error-border",
  },
  success: {
    icon: "check_circle",
    iconBg: "bg-accent",
    fg: "text-accent-dark",
    border: "border-border-soft",
  },
};
