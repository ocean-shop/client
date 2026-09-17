"use client";

import { useSyncExternalStore } from "react";
import { Toast } from "@/app/ui/toast/toast";
import { toastStore } from "./toast-store";

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const toasts = useSyncExternalStore(
    toastStore.subscribe,
    toastStore.getSnapshot,
    toastStore.getSnapshot
  );

  return (
    <>
      {children}

      <div className="pointer-events-none fixed inset-x-0 top-4 z-50 flex flex-col items-center gap-2.5 px-4 sm:left-auto sm:right-4 sm:items-end">
        {toasts.map((toast) => (
          <div key={toast.id} className="pointer-events-auto">
            <Toast
              variant={toast.variant}
              title={toast.title}
              message={toast.message}
              action={toast.action}
              onClose={() => toastStore.dismiss(toast.id)}
            />
          </div>
        ))}
      </div>
    </>
  );
}
