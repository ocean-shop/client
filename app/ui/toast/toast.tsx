import { Button } from "@/app/ui/button/button";
import { MaterialIcon } from "@/app/ui/material-icon/material-icon";
import { ToastActionLink } from "./components/toast-action-link/toast-action-link";
import {
  TOAST_CLASS_NAME,
  TOAST_CLOSE_BUTTON_CLASS_NAME,
  TOAST_CLOSE_LABEL,
  TOAST_ICON_CLASS_NAME,
  TOAST_VARIANT_STYLES,
} from "./constants/toast.constants";
import type { ToastProps } from "./types/toast.types";

export const Toast = ({ variant, title, message, actions, onClose }: ToastProps) => {
  const styles = TOAST_VARIANT_STYLES[variant];

  return (
    <div className={`${TOAST_CLASS_NAME} ${styles.border}`}>
      <MaterialIcon
        name={styles.icon}
        filled
        className={`${TOAST_ICON_CLASS_NAME} ${styles.iconBg}`}
      />

      <div className="flex min-w-0 flex-1 flex-col gap-[5px]">
        <span className={`text-[14.5px] font-semibold ${styles.fg}`}>{title}</span>
        <span className="text-pretty text-[13.5px] leading-[1.5] text-muted">{message}</span>
        {actions && actions.length > 0 && (
          <div className="flex flex-wrap gap-x-4 gap-y-1 pt-0.5">
            {actions.map((action) => (
              <ToastActionLink key={action.label} action={action} colorClassName={styles.fg} />
            ))}
          </div>
        )}
      </div>

      <Button
        variant="ghost"
        size="auto"
        aria-label={TOAST_CLOSE_LABEL}
        onClick={onClose}
        className={TOAST_CLOSE_BUTTON_CLASS_NAME}
      >
        <MaterialIcon name="close" className="text-[19px]" />
      </Button>
    </div>
  );
};
