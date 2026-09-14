import type { ToastAction, ToastVariant } from "@/app/ui/toast/types/toast.types";
import { TOAST_AUTO_DISMISS_MS } from "./constants/toast-provider.constants";
import type { ToastItem, ToastListener } from "./types/toast-provider.types";

let toasts: ToastItem[] = [];
let listeners: ToastListener[] = [];

function emit() {
  listeners.forEach((listener) => listener(toasts));
}

function show(variant: ToastVariant, title: string, message: string, action?: ToastAction) {
  const id = crypto.randomUUID();

  toasts = [...toasts, { id, variant, title, message, action }];
  emit();

  setTimeout(() => dismiss(id), TOAST_AUTO_DISMISS_MS);

  return id;
}

function dismiss(id: string) {
  toasts = toasts.filter((toast) => toast.id !== id);
  emit();
}

function subscribe(listener: ToastListener) {
  listeners = [...listeners, listener];

  return () => {
    listeners = listeners.filter((existing) => existing !== listener);
  };
}

function getSnapshot() {
  return toasts;
}

export const toastStore = {
  subscribe,
  getSnapshot,
  dismiss,
  error: (title: string, message: string, action?: ToastAction) =>
    show("error", title, message, action),
  success: (title: string, message: string, action?: ToastAction) =>
    show("success", title, message, action),
};
