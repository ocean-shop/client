"use server";

import { refresh } from "next/cache";
import { readApiActionFailure } from "@/app/core/api/helpers/read-api-action-failure";
import { authFetch } from "@/app/shared/auth/helpers/auth-fetch";
import { getAuthUser } from "@/app/shared/auth/helpers/get-auth-user";
import { CABINET_ACTION_UNAUTHORIZED_FAILURE } from "../../../constants/cabinet.constants";
import { buildShippingClientMainApiUrlHelper } from "../helpers/build-shipping-client-main-api-url";
import type { UserShippingActionResult } from "../types/addresses.types";

/** Makes one of the signed-in user's addresses main; the backend unsets the previous one. */
export const setMainUserShippingAction = async (
  shippingId: string
): Promise<UserShippingActionResult> => {
  const user = await getAuthUser();

  if (!user) return CABINET_ACTION_UNAUTHORIZED_FAILURE;

  const response = await authFetch(buildShippingClientMainApiUrlHelper(user.id, shippingId), {
    method: "PATCH",
  });

  if (!response.ok) return readApiActionFailure(response);

  refresh();

  return { ok: true };
};
