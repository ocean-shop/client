"use server";

import { API_JSON_HEADERS } from "@/app/core/api/constants/api.constants";
import { getShopSettings } from "@/app/shared/shop-settings/api/get-shop-settings";
import {
  AUTH_CLIENT_API_URL,
  AUTH_EMAIL_LOGIN_MARKER,
  AUTH_PHONE_LOGIN_DISABLED_FAILURE,
} from "../constants/auth.constants";
import type { RequestClientOtpRequest, RequestClientOtpResult } from "../types/auth.types";

/**
 * Sends a one-time code to the email or phone, creating the user if they do not exist yet. Runs as
 * an action because `API_BASE_URL` is server-only. Phone logins are refused while the shop has
 * phone login off, since the backend does not check that flag.
 */
export const requestClientOtpAction = async (
  body: RequestClientOtpRequest
): Promise<RequestClientOtpResult> => {
  const { features } = await getShopSettings();
  const login = typeof body?.login === "string" ? body.login : "";

  if (!features.isPhoneLoginEnabled && !login.includes(AUTH_EMAIL_LOGIN_MARKER)) {
    return AUTH_PHONE_LOGIN_DISABLED_FAILURE;
  }

  const response = await fetch(`${AUTH_CLIENT_API_URL}/request-otp`, {
    method: "POST",
    headers: API_JSON_HEADERS,
    body: JSON.stringify(body),
    cache: "no-store",
  });

  if (!response.ok) return { ok: false, status: response.status };

  return { ok: true };
};
