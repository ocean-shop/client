"use server";

import { refresh } from "next/cache";
import { API_JSON_HEADERS } from "@/app/core/api/constants/api.constants";
import { readApiActionFailure } from "@/app/core/api/helpers/read-api-action-failure";
import { authFetch } from "@/app/shared/auth/helpers/auth-fetch";
import { getAuthUser } from "@/app/shared/auth/helpers/get-auth-user";
import { CABINET_ACTION_UNAUTHORIZED_FAILURE } from "../../../constants/cabinet.constants";
import { buildShippingClientApiUrlHelper } from "../helpers/build-shipping-client-api-url";
import type {
  CreateUserShippingRequest,
  CreateUserShippingResult,
  UserShipping,
} from "../types/addresses.types";

/**
 * Saves a new delivery address for the signed-in user and refreshes the page, so the list shows
 * it. The user id comes from the session, never from the caller.
 */
export const createUserShippingAction = async (
  body: CreateUserShippingRequest
): Promise<CreateUserShippingResult> => {
  const user = await getAuthUser();

  if (!user) return CABINET_ACTION_UNAUTHORIZED_FAILURE;

  const response = await authFetch(buildShippingClientApiUrlHelper(user.id), {
    method: "POST",
    headers: API_JSON_HEADERS,
    body: JSON.stringify(body),
  });

  if (!response.ok) return readApiActionFailure(response);

  const shipping: UserShipping = await response.json();

  refresh();

  return { ok: true, shipping };
};
