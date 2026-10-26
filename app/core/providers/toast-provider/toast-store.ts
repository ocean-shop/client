import type { ToastAction, ToastVariant } from "@/app/ui/toast/types/toast.types";
import { TOAST_AUTO_DISMISS_MS } from "./constants/toast-provider.constants";
import type { ToastItem, ToastListener } from "./types/toast-provider.types";

let toasts: ToastItem[] = [];
let listeners: ToastListener[] = [];

const emit = () => {
  listeners.forEach((listener) => listener(toasts));
};

const dismiss = (id: string) => {
  toasts = toasts.filter((toast) => toast.id !== id);
  emit();
};

const show = (variant: ToastVariant, title: string, message: string, actions?: ToastAction[]) => {
  const id = crypto.randomUUID();

  toasts = [...toasts, { id, variant, title, message, actions }];
  emit();

  setTimeout(() => dismiss(id), TOAST_AUTO_DISMISS_MS);

  return id;
};

const subscribe = (listener: ToastListener) => {
  listeners = [...listeners, listener];

  return () => {
    listeners = listeners.filter((existing) => existing !== listener);
  };
};

const getSnapshot = () => {
  return toasts;
};

export const toastStore = {
  subscribe,
  getSnapshot,
  dismiss,
  error: (title: string, message: string, actions?: ToastAction[]) =>
    show("error", title, message, actions),
  success: (title: string, message: string, actions?: ToastAction[]) =>
    show("success", title, message, actions),
};
