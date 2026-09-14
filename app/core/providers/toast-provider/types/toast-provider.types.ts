import type { ToastAction, ToastVariant } from "@/app/ui/toast/types/toast.types";

export type ToastItem = {
  id: string;
  variant: ToastVariant;
  title: string;
  message: string;
  action?: ToastAction;
};

export type ToastListener = (toasts: ToastItem[]) => void;
