"use server";

import { refresh } from "next/cache";
import { readApiActionFailure } from "@/app/core/api/helpers/read-api-action-failure";
import { authFetch } from "@/app/shared/auth/helpers/auth-fetch";
import { getAuthUser } from "@/app/shared/auth/helpers/get-auth-user";
import { CABINET_ACTION_UNAUTHORIZED_FAILURE } from "../../../constants/cabinet.constants";
import { buildShippingClientItemApiUrlHelper } from "../helpers/build-shipping-client-item-api-url";
import type { UserShippingActionResult } from "../types/addresses.types";

/**
 * Removes one of the signed-in user's addresses. If it was main, the backend makes the most
 * recent remaining one main, so the refreshed list shows the new badge.
 */
export const removeUserShippingAction = async (
  shippingId: string
): Promise<UserShippingActionResult> => {
  const user = await getAuthUser();

  if (!user) return CABINET_ACTION_UNAUTHORIZED_FAILURE;

  const response = await authFetch(buildShippingClientItemApiUrlHelper(user.id, shippingId), {
    method: "DELETE",
  });

  if (!response.ok) return readApiActionFailure(response);

  refresh();

  return { ok: true };
};
