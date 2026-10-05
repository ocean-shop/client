import type { LocalStorageListener } from "./types/local-storage.types";

/**
 * JSON wrapper around `window.localStorage`. Every call is a no-op on the server, and a full,
 * blocked (private mode) or hand-edited storage degrades to the fallback instead of throwing.
 */
function isAvailable() {
  return typeof window !== "undefined" && !!window.localStorage;
}

function getItem<T>(key: string, fallback: T): T {
  if (!isAvailable()) return fallback;

  try {
    const value = window.localStorage.getItem(key);

    return value === null ? fallback : (JSON.parse(value) as T);
  } catch {
    return fallback;
  }
}

function setItem<T>(key: string, value: T) {
  if (!isAvailable()) return;

  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Quota exceeded or storage disabled: the in-memory state still works for this visit.
  }
}

function removeItem(key: string) {
  if (!isAvailable()) return;

  try {
    window.localStorage.removeItem(key);
  } catch {
    // Same as above: nothing to clean up when storage is unreachable.
  }
}

/** Fires when another tab changes `key`; the current tab never receives its own writes. */
function subscribe(key: string, listener: LocalStorageListener) {
  if (!isAvailable()) return () => {};

  function handleStorage(event: StorageEvent) {
    if (event.key === key || event.key === null) listener();
  }

  window.addEventListener("storage", handleStorage);

  return () => window.removeEventListener("storage", handleStorage);
}

export const localStorageService = {
  getItem,
  setItem,
  removeItem,
  subscribe,
};
