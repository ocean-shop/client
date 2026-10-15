"use server";

import { cookies, headers } from "next/headers";
import { AUTH_CLIENT_API_URL, AUTH_REQUEST_HEADERS } from "../constants/auth.constants";
import { setAuthSessionCookies } from "../helpers/auth-session-cookies";
import { getApiErrorMessage } from "../helpers/get-api-error-message";
import type {
  AuthSessionResponse,
  VerifyClientOtpRequest,
  VerifyClientOtpResult,
} from "../types/auth.types";

/**
 * Exchanges the one-time code for tokens and keeps them in httpOnly cookies on the shop's domain.
 * The backend's own `refresh_token` cookie is ignored: it is set on the API's domain and would
 * never reach the browser through this server-to-server call.
 */
export async function verifyClientOtpAction(
  body: VerifyClientOtpRequest
): Promise<VerifyClientOtpResult> {
  const userAgent = (await headers()).get("user-agent");

  const response = await fetch(`${AUTH_CLIENT_API_URL}/verify-otp`, {
    method: "POST",
    headers: { ...AUTH_REQUEST_HEADERS, ...(userAgent && { "User-Agent": userAgent }) },
    body: JSON.stringify(body),
    cache: "no-store",
  });

  if (!response.ok) {
    return { ok: false, status: response.status, message: await getApiErrorMessage(response) };
  }

  const { user, ...tokens }: AuthSessionResponse = await response.json();

  setAuthSessionCookies(await cookies(), tokens);

  return { ok: true, user };
}
