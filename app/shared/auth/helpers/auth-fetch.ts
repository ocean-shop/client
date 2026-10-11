import { cookies } from "next/headers";
import { AUTH_ACCESS_TOKEN_COOKIE } from "../constants/auth.constants";

/**
 * `fetch` for endpoints that need the signed-in user. Server-only: the access token lives in an
 * httpOnly cookie, and the proxy has already refreshed it before this request was rendered.
 */
export async function authFetch(input: string | URL, init: RequestInit = {}) {
  const accessToken = (await cookies()).get(AUTH_ACCESS_TOKEN_COOKIE)?.value;
  const headers = new Headers(init.headers);

  if (accessToken) headers.set("Authorization", `Bearer ${accessToken}`);

  return fetch(input, { cache: "no-store", ...init, headers });
}
