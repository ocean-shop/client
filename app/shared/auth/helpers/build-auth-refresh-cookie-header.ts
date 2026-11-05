import { AUTH_REFRESH_TOKEN_COOKIE } from "../constants/auth.constants";

/** Hands the refresh token to the backend the way its own cookie would, for server-to-server calls. */
export const buildAuthRefreshCookieHeader = (refreshToken: string) => ({
  Cookie: `${AUTH_REFRESH_TOKEN_COOKIE}=${refreshToken}`,
});
