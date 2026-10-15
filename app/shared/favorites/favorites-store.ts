import { addFavoriteProductAction } from "./actions/add-favorite-product";
import { getFavoriteProductIdsAction } from "./actions/get-favorite-product-ids";
import { removeFavoriteProductAction } from "./actions/remove-favorite-product";
import {
  FAVORITES_INITIAL_STATE,
  FAVORITES_UNAUTHORIZED_STATUS,
} from "./constants/favorites.constants";
import type {
  FavoritesListener,
  FavoritesState,
  FavoriteToggleResult,
} from "./types/favorites.types";

/**
 * The favourite ids every heart in the shop reads. They are asked for once, the first time a heart
 * mounts, rather than on every page, so the public pages stay free of the session.
 */
let state: FavoritesState = FAVORITES_INITIAL_STATE;
let listeners: FavoritesListener[] = [];
let loadRequest: Promise<void> | null = null;

function emit() {
  listeners.forEach((listener) => listener());
}

function setState(nextState: FavoritesState) {
  state = nextState;
  emit();
}

function setFavorite(productId: string, isFavorite: boolean) {
  const ids = new Set(state.ids);

  if (isFavorite) ids.add(productId);
  else ids.delete(productId);

  setState({ ...state, ids });
}

function load() {
  if (state.status !== "idle") return loadRequest;

  setState({ ...state, status: "loading" });

  loadRequest = getFavoriteProductIdsAction()
    .then((ids) => {
      setState(ids ? { ids: new Set(ids), status: "ready" } : { ids: new Set(), status: "guest" });
    })
    .catch(() => {
      // Left idle, so the next heart to mount tries again.
      setState(FAVORITES_INITIAL_STATE);
    })
    .finally(() => {
      loadRequest = null;
    });

  return loadRequest;
}

/** Flips the heart at once and puts it back if the backend refuses. */
async function toggle(productId: string): Promise<FavoriteToggleResult> {
  // A toggle racing the first load would be overwritten by it, so it waits.
  await load();

  if (state.status === "guest") return { ok: false, status: FAVORITES_UNAUTHORIZED_STATUS };

  const wasFavorite = state.ids.has(productId);

  setFavorite(productId, !wasFavorite);

  try {
    const result = wasFavorite
      ? await removeFavoriteProductAction(productId)
      : await addFavoriteProductAction(productId);

    if (!result.ok) {
      setFavorite(productId, wasFavorite);
      return result;
    }

    return { ok: true, isFavorite: !wasFavorite };
  } catch (error) {
    setFavorite(productId, wasFavorite);
    throw error;
  }
}

/** Forgets the ids after signing in or out, so they are asked for again for the new session. */
function reset() {
  setState(FAVORITES_INITIAL_STATE);

  if (listeners.length > 0) load();
}

function subscribe(listener: FavoritesListener) {
  listeners = [...listeners, listener];
  load();

  return () => {
    listeners = listeners.filter((existing) => existing !== listener);
  };
}

function getState() {
  return state;
}

/** The server never knows the favourites, so every heart starts out empty there. */
function getServerState() {
  return FAVORITES_INITIAL_STATE;
}

export const favoritesStore = {
  subscribe,
  getState,
  getServerState,
  toggle,
  reset,
};
