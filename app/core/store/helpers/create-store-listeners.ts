import type { StoreListener } from "../types/store.types";

/** The subscription half of a store read through `useSyncExternalStore`. */
export const createStoreListeners = () => {
  let listeners: StoreListener[] = [];

  const emit = () => {
    listeners.forEach((listener) => listener());
  };

  const subscribe = (listener: StoreListener) => {
    listeners = [...listeners, listener];

    return () => {
      listeners = listeners.filter((existing) => existing !== listener);
    };
  };

  return { emit, subscribe };
};
