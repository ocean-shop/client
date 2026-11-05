import { readApiResponse } from "@/app/core/api/helpers/read-api-response";
import { authFetch } from "@/app/shared/auth/helpers/auth-fetch";
import { ORDER_NOT_FOUND_STATUSES } from "../constants/orders.constants";
import { buildUserOrderApiUrlHelper } from "../helpers/build-user-order-api-url";
import type { UserOrder } from "../types/orders.types";

/**
 * One of the signed-in user's orders, or `null` when there is no such order for them to see.
 * Server-only, since it needs the access token cookie.
 */
export const getUserOrder = async (orderId: string): Promise<UserOrder | null> => {
  const response = await authFetch(buildUserOrderApiUrlHelper(orderId));

  if (ORDER_NOT_FOUND_STATUSES.includes(response.status)) return null;

  return readApiResponse<UserOrder>(response);
};
