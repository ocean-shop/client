import { buildFavoritesClientApiUrlHelper } from "./build-favorites-client-api-url";

/** One favourite of the user, which `DELETE` removes. */
export const buildFavoritesClientItemApiUrlHelper = (userId: string, productId: string): string =>
  `${buildFavoritesClientApiUrlHelper(userId)}/${productId}`;
