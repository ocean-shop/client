export type FormActionsProps = {
  cancelLabel: string;
  confirmLabel: string;
  onCancel: () => void;
  /** Left out inside a form, where confirming submits it. */
  onConfirm?: () => void;
  disabled?: boolean;
  /** For a confirmation that cannot be undone, e.g. removing something. */
  isDestructive?: boolean;
  className?: string;
};
