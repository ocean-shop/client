"use server";

import { authFetch } from "@/app/shared/auth/helpers/auth-fetch";
import { getAuthUser } from "@/app/shared/auth/helpers/get-auth-user";
import { FAVORITES_UNAUTHORIZED_STATUS } from "../constants/favorites.constants";
import { buildFavoritesClientItemApiUrlHelper } from "../helpers/build-favorites-client-item-api-url";
import type { FavoriteProductActionResult } from "../types/favorites.types";

/** Removes a product from the signed-in user's favourites. */
export const removeFavoriteProductAction = async (
  productId: string
): Promise<FavoriteProductActionResult> => {
  const user = await getAuthUser();

  if (!user) return { ok: false, status: FAVORITES_UNAUTHORIZED_STATUS };

  const response = await authFetch(buildFavoritesClientItemApiUrlHelper(user.id, productId), {
    method: "DELETE",
  });

  return response.ok ? { ok: true } : { ok: false, status: response.status };
};
