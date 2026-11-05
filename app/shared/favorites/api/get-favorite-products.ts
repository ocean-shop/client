import { readApiResponse } from "@/app/core/api/helpers/read-api-response";
import { authFetch } from "@/app/shared/auth/helpers/auth-fetch";
import type { ProductListResponse } from "@/app/shared/products/types/products.types";
import { buildFavoritesClientListApiUrlHelper } from "../helpers/build-favorites-client-list-api-url";

/** One page of the user's favourites, newest first. Server-only, since it needs the access token cookie. */
export const getFavoriteProducts = async (
  userId: string,
  page: number,
  limit: number
): Promise<ProductListResponse> => {
  const response = await authFetch(buildFavoritesClientListApiUrlHelper(userId, page, limit));

  return readApiResponse<ProductListResponse>(response);
};
