"use server";

import { authFetch } from "@/app/shared/auth/helpers/auth-fetch";
import { getAuthUser } from "@/app/shared/auth/helpers/get-auth-user";
import {
  FAVORITES_REQUEST_HEADERS,
  FAVORITES_UNAUTHORIZED_STATUS,
  getFavoritesClientApiUrl,
} from "../constants/favorites.constants";
import type { FavoriteProductActionResult } from "../types/favorites.types";

/** Adds a product to the signed-in user's favourites; adding one that is already there is a no-op. */
export async function addFavoriteProductAction(
  productId: string
): Promise<FavoriteProductActionResult> {
  const user = await getAuthUser();

  if (!user) return { ok: false, status: FAVORITES_UNAUTHORIZED_STATUS };

  const response = await authFetch(getFavoritesClientApiUrl(user.id), {
    method: "POST",
    headers: FAVORITES_REQUEST_HEADERS,
    body: JSON.stringify({ shopId: process.env.SHOP_ID ?? "", productId }),
  });

  return response.ok ? { ok: true } : { ok: false, status: response.status };
}
