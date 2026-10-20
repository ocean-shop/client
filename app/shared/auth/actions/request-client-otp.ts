"use server";

import { AUTH_CLIENT_API_URL, AUTH_REQUEST_HEADERS } from "../constants/auth.constants";
import type { RequestClientOtpRequest, RequestClientOtpResult } from "../types/auth.types";

/**
 * Sends a one-time code to the email or phone, creating the user if they do not exist yet. Runs as
 * an action because `API_BASE_URL` is server-only.
 */
export const requestClientOtpAction = async (
  body: RequestClientOtpRequest
): Promise<RequestClientOtpResult> => {
  const response = await fetch(`${AUTH_CLIENT_API_URL}/request-otp`, {
    method: "POST",
    headers: AUTH_REQUEST_HEADERS,
    body: JSON.stringify(body),
    cache: "no-store",
  });

  if (!response.ok) return { ok: false, status: response.status };

  return { ok: true };
};
