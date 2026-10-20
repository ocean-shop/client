export type ToastVariant = "error" | "success";

/** Rendered as a link when `href` is set; `onClick` still runs, e.g. to dismiss the toast. */
export type ToastAction = {
  label: string;
  onClick: () => void;
  href?: string;
};

export type ToastProps = {
  variant: ToastVariant;
  title: string;
  message: string;
  actions?: ToastAction[];
  onClose: () => void;
};
