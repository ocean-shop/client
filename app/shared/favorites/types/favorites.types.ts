/**
 * `idle` until the ids are first asked for, `guest` when nobody is signed in, `ready` once the
 * signed-in user's favourites are known.
 */
export type FavoritesStatus = "idle" | "loading" | "ready" | "guest";

export type FavoritesState = {
  ids: ReadonlySet<string>;
  status: FavoritesStatus;
};

export type FavoritesListener = () => void;

/** Result of adding or removing a favourite; a `401` means the user has to sign in first. */
export type FavoriteProductActionResult = { ok: true } | { ok: false; status: number };

/** `isFavorite` is where the heart ended up. */
export type FavoriteToggleResult =
  { ok: true; isFavorite: boolean } | { ok: false; status: number };
