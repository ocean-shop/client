"use client";

import { useReportNavigationPending } from "../../hooks/use-report-navigation-pending";

/**
 * Keeps the global progress bar active for as long as it stays mounted. Drop it into a
 * `loading.tsx` so a route waiting on its server data drives the bar like any other transition.
 */
export function NavigationProgressReporter() {
  useReportNavigationPending(true);

  return null;
}
