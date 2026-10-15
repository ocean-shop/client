"use server";

import { refresh } from "next/cache";
import { authFetch } from "@/app/shared/auth/helpers/auth-fetch";
import { getApiErrorMessage } from "@/app/shared/auth/helpers/get-api-error-message";
import { getAuthUser } from "@/app/shared/auth/helpers/get-auth-user";
import { getShippingClientItemApiUrl } from "../constants/addresses.constants";
import type { UserShippingActionResult } from "../types/addresses.types";

/**
 * Removes one of the signed-in user's addresses. If it was main, the backend makes the most
 * recent remaining one main, so the refreshed list shows the new badge.
 */
export async function removeUserShippingAction(
  shippingId: string
): Promise<UserShippingActionResult> {
  const user = await getAuthUser();

  if (!user) return { ok: false, status: 401, message: null };

  const response = await authFetch(getShippingClientItemApiUrl(user.id, shippingId), {
    method: "DELETE",
  });

  if (!response.ok) {
    return { ok: false, status: response.status, message: await getApiErrorMessage(response) };
  }

  refresh();

  return { ok: true };
}
