import { readApiResponse } from "@/app/core/api/helpers/read-api-response";
import { authFetch } from "@/app/shared/auth/helpers/auth-fetch";
import { buildShippingClientApiUrlHelper } from "../helpers/build-shipping-client-api-url";
import type { UserShipping } from "../types/addresses.types";

/** Every delivery address the signed-in user saved. Server-only, since it needs the access token cookie. */
export const getUserShippings = async (userId: string): Promise<UserShipping[]> => {
  const response = await authFetch(buildShippingClientApiUrlHelper(userId));

  return readApiResponse<UserShipping[]>(response);
};
