import { FAVORITES_CLIENT_API_URL } from "../constants/favorites.constants";

/** The user's favourites collection: `POST` adds to it, `GET` lists it. */
export const buildFavoritesClientApiUrlHelper = (userId: string): string =>
  `${FAVORITES_CLIENT_API_URL}/${userId}`;
