import type { ToastVariant, ToastVariantStyles } from "../types/toast.types";

export const TOAST_CLOSE_LABEL = "Закрити";

export const TOAST_CLASS_NAME =
  "flex w-[420px] items-start gap-3 rounded-2xl border bg-background p-3.5 pl-4 shadow-popover";

export const TOAST_ICON_CLASS_NAME =
  "flex h-[30px] w-[30px] flex-none items-center justify-center rounded-[9px] text-[19px] text-white";

export const TOAST_CLOSE_BUTTON_CLASS_NAME =
  "h-[30px] w-[30px] flex-none rounded-[9px] hover:bg-black/[.06]";

export const TOAST_VARIANT_STYLES: Record<ToastVariant, ToastVariantStyles> = {
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
