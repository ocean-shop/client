export type ToastVariant = "error" | "success";

export type ToastAction = {
  label: string;
  onClick: () => void;
};

export type ToastProps = {
  variant: ToastVariant;
  title: string;
  message: string;
  action?: ToastAction;
  onClose: () => void;
};
