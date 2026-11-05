import { withShopIdSearchParams } from "@/app/core/api/helpers/with-shop-id-search-params";
import { ORDERS_CLIENT_API_URL } from "@/app/shared/orders/constants/orders.constants";
import { ORDERS_PAGE_SIZE } from "../constants/orders.constants";

export const buildUserOrdersApiUrlHelper = (userId: string, page: number): string => {
  const searchParams = withShopIdSearchParams({
    page: String(page),
    limit: String(ORDERS_PAGE_SIZE),
  });

  return `${ORDERS_CLIENT_API_URL}/by-user/${userId}?${searchParams}`;
};
