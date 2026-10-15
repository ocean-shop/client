import { ApiError } from "@/app/core/api/api-fetch";
import { authFetch } from "@/app/shared/auth/helpers/auth-fetch";
import type { ProductListResponse } from "@/app/shared/products/types/products.types";
import { getFavoritesClientListApiUrl } from "../constants/favorites.constants";

/** One page of the user's favourites, newest first. Server-only, since it needs the access token cookie. */
export async function getFavoriteProducts(
  userId: string,
  page: number,
  limit: number
): Promise<ProductListResponse> {
  const response = await authFetch(getFavoritesClientListApiUrl(userId, page, limit));

  if (!response.ok) throw new ApiError(response.status);

  return response.json();
}
