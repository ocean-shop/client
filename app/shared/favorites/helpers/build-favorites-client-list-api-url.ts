import { withShopIdSearchParams } from "@/app/core/api/helpers/with-shop-id-search-params";
import { buildFavoritesClientApiUrlHelper } from "./build-favorites-client-api-url";

export const buildFavoritesClientListApiUrlHelper = (
  userId: string,
  page: number,
  limit: number
): string => {
  const searchParams = withShopIdSearchParams({ page: String(page), limit: String(limit) });

  return `${buildFavoritesClientApiUrlHelper(userId)}?${searchParams}`;
};
