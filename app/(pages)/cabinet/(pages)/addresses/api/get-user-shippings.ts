import { ApiError } from "@/app/core/api/api-fetch";
import { authFetch } from "@/app/shared/auth/helpers/auth-fetch";
import { getShippingClientApiUrl } from "../constants/addresses.constants";
import type { UserShipping } from "../types/addresses.types";

/** Every delivery address the signed-in user saved. Server-only, since it needs the access token cookie. */
export async function getUserShippings(userId: string): Promise<UserShipping[]> {
  const response = await authFetch(getShippingClientApiUrl(userId));

  if (!response.ok) throw new ApiError(response.status);

  return response.json();
}
