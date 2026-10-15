"use server";

import { authFetch } from "@/app/shared/auth/helpers/auth-fetch";
import { getAuthUser } from "@/app/shared/auth/helpers/get-auth-user";
import {
  FAVORITES_UNAUTHORIZED_STATUS,
  getFavoritesClientItemApiUrl,
} from "../constants/favorites.constants";
import type { FavoriteProductActionResult } from "../types/favorites.types";

/** Removes a product from the signed-in user's favourites. */
export async function removeFavoriteProductAction(
  productId: string
): Promise<FavoriteProductActionResult> {
  const user = await getAuthUser();

  if (!user) return { ok: false, status: FAVORITES_UNAUTHORIZED_STATUS };

  const response = await authFetch(getFavoritesClientItemApiUrl(user.id, productId), {
    method: "DELETE",
  });

  return response.ok ? { ok: true } : { ok: false, status: response.status };
}
