"use client";

import { useSyncExternalStore } from "react";
import { navigationProgressStore } from "../navigation-progress-store";

/** Number of router transitions currently in flight. */
export const useNavigationPendingCount = () => {
  return useSyncExternalStore(
    navigationProgressStore.subscribe,
    navigationProgressStore.getSnapshot,
    navigationProgressStore.getServerSnapshot
  );
};
