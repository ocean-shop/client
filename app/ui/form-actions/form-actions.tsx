import { Button } from "../button/button";
import {
  FORM_ACTIONS_BASE_CLASS_NAME,
  FORM_ACTIONS_CANCEL_CLASS_NAME,
  FORM_ACTIONS_CONFIRM_CLASS_NAME,
  FORM_ACTIONS_DESTRUCTIVE_CLASS_NAME,
} from "./constants/form-actions.constants";
import type { FormActionsProps } from "./types/form-actions.types";

/** A cancel and a confirm button, stacked on phones with the confirm one on top. */
export const FormActions = ({
  cancelLabel,
  confirmLabel,
  onCancel,
  onConfirm,
  disabled,
  isDestructive,
  className,
}: FormActionsProps) => {
  return (
    <div className={`${FORM_ACTIONS_BASE_CLASS_NAME} ${className ?? ""}`}>
      <Button
        variant="outline"
        size="auto"
        onClick={onCancel}
        disabled={disabled}
        className={FORM_ACTIONS_CANCEL_CLASS_NAME}
      >
        {cancelLabel}
      </Button>
      <Button
        type={onConfirm ? "button" : "submit"}
        size="auto"
        onClick={onConfirm}
        disabled={disabled}
        className={`${FORM_ACTIONS_CONFIRM_CLASS_NAME} ${
          isDestructive ? FORM_ACTIONS_DESTRUCTIVE_CLASS_NAME : ""
        }`}
      >
        {confirmLabel}
      </Button>
    </div>
  );
};
