"use client";

import { useSyncExternalStore } from "react";

function subscribe() {
  return () => {};
}

/**
 * `false` on the server and during hydration, `true` afterwards. Lets UI that depends on browser
 * storage hold a placeholder instead of flashing the server's empty state.
 */
export function useIsHydrated() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );
}
