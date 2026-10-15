"use client";

import { useSyncExternalStore } from "react";
import { favoritesStore } from "../favorites-store";

export function useFavorites() {
  return useSyncExternalStore(
    favoritesStore.subscribe,
    favoritesStore.getState,
    favoritesStore.getServerState
  );
}
