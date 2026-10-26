"use server";

import { refresh } from "next/cache";
import { authFetch } from "@/app/shared/auth/helpers/auth-fetch";
import { getApiErrorMessage } from "@/app/shared/auth/helpers/get-api-error-message";
import { getAuthUser } from "@/app/shared/auth/helpers/get-auth-user";
import {
  getShippingClientApiUrl,
  SHIPPING_REQUEST_HEADERS,
} from "../constants/addresses.constants";
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

  if (!user) return { ok: false, status: 401, message: null };

  const response = await authFetch(getShippingClientApiUrl(user.id), {
    method: "POST",
    headers: SHIPPING_REQUEST_HEADERS,
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    return { ok: false, status: response.status, message: await getApiErrorMessage(response) };
  }

  const shipping: UserShipping = await response.json();

  refresh();

  return { ok: true, shipping };
};
