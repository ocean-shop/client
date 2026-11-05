import type { FavoritesState } from "../types/favorites.types";

export const FAVORITES_CLIENT_API_URL = `${process.env.API_BASE_URL}/catalog/favorites-client`;

/** The endpoint's own maximum, so collecting every favourite id takes as few pages as possible. */
export const FAVORITES_IDS_PAGE_LIMIT = 100;

export const FAVORITES_INITIAL_STATE: FavoritesState = { ids: new Set(), status: "idle" };

export const FAVORITES_UNAUTHORIZED_STATUS = 401;

export const FAVORITES_ADDED_TOAST_TITLE = "Додано в обране";
export const FAVORITES_ADDED_TOAST_ACTION_LABEL = "Переглянути";
export const FAVORITES_ERROR_TOAST_TITLE = "Не вдалося оновити обране";
