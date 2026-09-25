"use client";

import { useEffect } from "react";
import { navigationProgressStore } from "../navigation-progress-store";

/** Keeps the global progress bar active for as long as the caller's transition is pending. */
export function useReportNavigationPending(isPending: boolean) {
  useEffect(() => {
    if (!isPending) return;

    navigationProgressStore.start();

    return navigationProgressStore.end;
  }, [isPending]);
}
