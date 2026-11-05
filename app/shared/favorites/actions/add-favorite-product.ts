"use server";

import { API_JSON_HEADERS, API_SHOP_ID } from "@/app/core/api/constants/api.constants";
import { authFetch } from "@/app/shared/auth/helpers/auth-fetch";
import { getAuthUser } from "@/app/shared/auth/helpers/get-auth-user";
import { FAVORITES_UNAUTHORIZED_STATUS } from "../constants/favorites.constants";
import { buildFavoritesClientApiUrlHelper } from "../helpers/build-favorites-client-api-url";
import type { FavoriteProductActionResult } from "../types/favorites.types";

/** Adds a product to the signed-in user's favourites; adding one that is already there is a no-op. */
export const addFavoriteProductAction = async (
  productId: string
): Promise<FavoriteProductActionResult> => {
  const user = await getAuthUser();

  if (!user) return { ok: false, status: FAVORITES_UNAUTHORIZED_STATUS };

  const response = await authFetch(buildFavoritesClientApiUrlHelper(user.id), {
    method: "POST",
    headers: API_JSON_HEADERS,
    body: JSON.stringify({ shopId: API_SHOP_ID, productId }),
  });

  return response.ok ? { ok: true } : { ok: false, status: response.status };
};
