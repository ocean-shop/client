"use server";

import { refresh } from "next/cache";
import { authFetch } from "@/app/shared/auth/helpers/auth-fetch";
import { getApiErrorMessage } from "@/app/shared/auth/helpers/get-api-error-message";
import { getAuthUser } from "@/app/shared/auth/helpers/get-auth-user";
import { getShippingClientMainApiUrl } from "../constants/addresses.constants";
import type { UserShippingActionResult } from "../types/addresses.types";

/** Makes one of the signed-in user's addresses main; the backend unsets the previous one. */
export const setMainUserShippingAction = async (
  shippingId: string
): Promise<UserShippingActionResult> => {
  const user = await getAuthUser();

  if (!user) return { ok: false, status: 401, message: null };

  const response = await authFetch(getShippingClientMainApiUrl(user.id, shippingId), {
    method: "PATCH",
  });

  if (!response.ok) {
    return { ok: false, status: response.status, message: await getApiErrorMessage(response) };
  }

  refresh();

  return { ok: true };
};
