import { Button } from "@/app/ui/button/button";
import { TOAST_VARIANT_STYLES } from "./constants/toast.constants";
import type { ToastProps } from "./types/toast.types";

export function Toast({ variant, title, message, action, onClose }: ToastProps) {
  const styles = TOAST_VARIANT_STYLES[variant];

  return (
    <div
      className={`flex w-[420px] items-start gap-3 rounded-2xl border bg-background p-3.5 pl-4 shadow-[0_18px_40px_-22px_rgba(17,28,45,.45)] ${styles.border}`}
    >
      <span
        className={`flex h-[30px] w-[30px] flex-none items-center justify-center rounded-[9px] font-symbols text-[19px] text-white ${styles.iconBg}`}
        style={{ fontVariationSettings: "'FILL' 1" }}
      >
        {styles.icon}
      </span>

      <div className="flex min-w-0 flex-1 flex-col gap-[5px]">
        <span className={`text-[14.5px] font-semibold ${styles.fg}`}>{title}</span>
        <span className="text-pretty text-[13.5px] leading-[1.5] text-muted">{message}</span>
        {action && (
          <span
            role="button"
            onClick={action.onClick}
            className={`cursor-pointer pt-0.5 text-[13.5px] font-semibold underline ${styles.fg}`}
          >
            {action.label}
          </span>
        )}
      </div>

      <Button
        variant="ghost"
        size="auto"
        onClick={onClose}
        className="h-[30px] w-[30px] flex-none rounded-[9px] hover:bg-black/[.06]"
      >
        <span className="font-symbols text-[19px]">close</span>
      </Button>
    </div>
  );
}
