import { ApiError } from "@/app/core/api/api-fetch";
import { authFetch } from "@/app/shared/auth/helpers/auth-fetch";
import { getUserOrdersApiUrl } from "../constants/orders.constants";
import type { UserOrdersResponse } from "../types/orders.types";

/** One page of the signed-in user's orders, newest first. Server-only, since it needs the access token cookie. */
export const getUserOrders = async (userId: string, page: number): Promise<UserOrdersResponse> => {
  const response = await authFetch(getUserOrdersApiUrl(userId, page));

  if (!response.ok) throw new ApiError(response.status);

  return response.json();
};
