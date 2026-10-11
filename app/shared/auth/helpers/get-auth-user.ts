import { cookies } from "next/headers";
import { cache } from "react";
import { AUTH_ACCESS_TOKEN_COOKIE } from "../constants/auth.constants";
import { decodeAuthToken } from "./decode-auth-token";

/**
 * The signed-in user, or `null` for guests. Server-only and memoised per request, so a layout and
 * its page can both ask without decoding the cookie twice.
 */
export const getAuthUser = cache(async () => {
  const accessToken = (await cookies()).get(AUTH_ACCESS_TOKEN_COOKIE)?.value;

  return accessToken ? decodeAuthToken(accessToken) : null;
});
