import { readApiResponse } from "@/app/core/api/helpers/read-api-response";
import { authFetch } from "@/app/shared/auth/helpers/auth-fetch";
import { buildUserOrdersApiUrlHelper } from "../helpers/build-user-orders-api-url";
import type { UserOrdersResponse } from "../types/orders.types";

/** One page of the signed-in user's orders, newest first. Server-only, since it needs the access token cookie. */
export const getUserOrders = async (userId: string, page: number): Promise<UserOrdersResponse> => {
  const response = await authFetch(buildUserOrdersApiUrlHelper(userId, page));

  return readApiResponse<UserOrdersResponse>(response);
};
