"use server";

import { cookies, headers } from "next/headers";
import {
  AUTH_CLIENT_API_URL,
  AUTH_MISSING_SESSION_STATUS,
  AUTH_REQUEST_HEADERS,
} from "../constants/auth.constants";
import { setAuthSessionCookies } from "../helpers/auth-session-cookies";
import { getApiErrorMessage } from "../helpers/get-api-error-message";
import { readAuthSession } from "../helpers/read-auth-session";
import type {
  VerifyClientOtpInput,
  VerifyClientOtpRequest,
  VerifyClientOtpResult,
} from "../types/auth.types";

/**
 * Exchanges the one-time code for tokens and keeps them in httpOnly cookies on the shop's domain.
 * The backend's `refresh_token` cookie never reaches the browser through this server-to-server
 * call, so its value is read from the response and stored again on the shop's domain. `SHOP_ID`
 * is server-only, so it is added here to bind the client to this storefront.
 */
export const verifyClientOtpAction = async (
  input: VerifyClientOtpInput
): Promise<VerifyClientOtpResult> => {
  const userAgent = (await headers()).get("user-agent");
  const body: VerifyClientOtpRequest = { ...input, shopId: process.env.SHOP_ID ?? "" };

  const response = await fetch(`${AUTH_CLIENT_API_URL}/verify-otp`, {
    method: "POST",
    headers: { ...AUTH_REQUEST_HEADERS, ...(userAgent && { "User-Agent": userAgent }) },
    body: JSON.stringify(body),
    cache: "no-store",
  });

  if (!response.ok) {
    return { ok: false, status: response.status, message: await getApiErrorMessage(response) };
  }

  const session = await readAuthSession(response);

  if (!session) {
    return { ok: false, status: AUTH_MISSING_SESSION_STATUS, message: null };
  }

  setAuthSessionCookies(await cookies(), session.tokens);

  return { ok: true, user: session.user };
};
