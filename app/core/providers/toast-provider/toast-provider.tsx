"use client";

import { useSyncExternalStore } from "react";
import { Toast } from "@/app/ui/toast/toast";
import { TOAST_VIEWPORT_CLASS_NAME } from "./constants/toast-provider.constants";
import { toastStore } from "./toast-store";
import type { ToastProviderProps } from "./types/toast-provider.types";

export const ToastProvider = ({ children }: ToastProviderProps) => {
  const toasts = useSyncExternalStore(
    toastStore.subscribe,
    toastStore.getSnapshot,
    toastStore.getSnapshot
  );

  return (
    <>
      {children}

      <div className={TOAST_VIEWPORT_CLASS_NAME}>
        {toasts.map((toast) => (
          <div key={toast.id} className="pointer-events-auto">
            <Toast
              variant={toast.variant}
              title={toast.title}
              message={toast.message}
              actions={toast.actions}
              onClose={() => toastStore.dismiss(toast.id)}
            />
          </div>
        ))}
      </div>
    </>
  );
};
