"use server";

import { cookies } from "next/headers";
import { AUTH_CLIENT_API_URL, AUTH_REFRESH_TOKEN_COOKIE } from "../constants/auth.constants";
import { clearAuthSessionCookies } from "../helpers/auth-session-cookies";

/** Ends the backend session and drops the token cookies even if the backend call fails. */
export const logoutAction = async () => {
  const cookieStore = await cookies();
  const refreshToken = cookieStore.get(AUTH_REFRESH_TOKEN_COOKIE)?.value;

  if (refreshToken) {
    try {
      await fetch(`${AUTH_CLIENT_API_URL}/logout`, {
        method: "POST",
        headers: { Cookie: `${AUTH_REFRESH_TOKEN_COOKIE}=${refreshToken}` },
        cache: "no-store",
      });
    } catch {
      // The cookies are cleared regardless; the backend session simply expires on its own.
    }
  }

  clearAuthSessionCookies(cookieStore);
};
