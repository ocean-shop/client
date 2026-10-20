"use server";

import { getAuthUser } from "@/app/shared/auth/helpers/get-auth-user";
import { getFavoriteProducts } from "../api/get-favorite-products";
import { FAVORITES_IDS_PAGE_LIMIT } from "../constants/favorites.constants";

/**
 * Ids of every product the signed-in user has favourited, so the hearts across the shop can be
 * filled in; `null` for guests. Runs as an action because the catalog pages are rendered without
 * the session, and the token cookie is httpOnly.
 */
export const getFavoriteProductIdsAction = async (): Promise<string[] | null> => {
  const user = await getAuthUser();

  if (!user) return null;

  const firstPage = await getFavoriteProducts(user.id, 1, FAVORITES_IDS_PAGE_LIMIT);
  const restPages = await Promise.all(
    Array.from({ length: Math.max(firstPage.totalPages - 1, 0) }, (_, index) =>
      getFavoriteProducts(user.id, index + 2, FAVORITES_IDS_PAGE_LIMIT)
    )
  );

  return [firstPage, ...restPages].flatMap((page) => page.items.map((product) => product.id));
};
