import type { NavigationProgressListener } from "./types/navigation-progress.types";

/**
 * Data is fetched on the server, so there is no client request to observe: the only signal
 * that an API call is in flight is the pending router transition that triggered it.
 * Every transition reports itself here and the global progress bar reads the total.
 */
let pendingCount = 0;
let listeners: NavigationProgressListener[] = [];

function emit() {
  listeners.forEach((listener) => listener(pendingCount));
}

function start() {
  pendingCount += 1;
  emit();
}

function end() {
  pendingCount = Math.max(0, pendingCount - 1);
  emit();
}

function subscribe(listener: NavigationProgressListener) {
  listeners = [...listeners, listener];

  return () => {
    listeners = listeners.filter((existing) => existing !== listener);
  };
}

function getSnapshot() {
  return pendingCount;
}

/** Nothing is pending while rendering on the server. */
function getServerSnapshot() {
  return 0;
}

export const navigationProgressStore = {
  subscribe,
  getSnapshot,
  getServerSnapshot,
  start,
  end,
};
