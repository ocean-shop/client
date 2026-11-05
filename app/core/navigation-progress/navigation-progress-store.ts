import { createStoreListeners } from "@/app/core/store/helpers/create-store-listeners";

/**
 * Data is fetched on the server, so there is no client request to observe: the only signal
 * that an API call is in flight is the pending router transition that triggered it.
 * Every transition reports itself here and the global progress bar reads the total.
 */
let pendingCount = 0;

const { emit, subscribe } = createStoreListeners();

const start = () => {
  pendingCount += 1;
  emit();
};

const end = () => {
  pendingCount = Math.max(0, pendingCount - 1);
  emit();
};

const getSnapshot = () => {
  return pendingCount;
};

/** Nothing is pending while rendering on the server. */
const getServerSnapshot = () => {
  return 0;
};

export const navigationProgressStore = {
  subscribe,
  getSnapshot,
  getServerSnapshot,
  start,
  end,
};
