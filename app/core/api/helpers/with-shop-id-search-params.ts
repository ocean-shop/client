import { API_SHOP_ID, API_SHOP_ID_QUERY_PARAM } from "../constants/api.constants";

/** Adds this storefront's `shopId` to a query string, since catalog endpoints are scoped by it. */
export const withShopIdSearchParams = (
  searchParams?: string | Record<string, string> | URLSearchParams
): string => {
  const params = new URLSearchParams(searchParams);

  if (API_SHOP_ID) params.set(API_SHOP_ID_QUERY_PARAM, API_SHOP_ID);

  return params.toString();
};
