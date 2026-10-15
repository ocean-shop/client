import { ApiError } from "@/app/core/api/api-fetch";
import { authFetch } from "@/app/shared/auth/helpers/auth-fetch";
import { getUserOrderApiUrl, ORDER_NOT_FOUND_STATUSES } from "../constants/orders.constants";
import type { UserOrder } from "../types/orders.types";

/**
 * One of the signed-in user's orders, or `null` when there is no such order for them to see.
 * Server-only, since it needs the access token cookie.
 */
export async function getUserOrder(orderId: string): Promise<UserOrder | null> {
  const response = await authFetch(getUserOrderApiUrl(orderId));

  if (ORDER_NOT_FOUND_STATUSES.includes(response.status)) return null;
  if (!response.ok) throw new ApiError(response.status);

  return response.json();
}
