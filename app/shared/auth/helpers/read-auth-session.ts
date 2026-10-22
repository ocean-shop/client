import { AUTH_REFRESH_TOKEN_COOKIE } from "../constants/auth.constants";
import type { AuthSession, AuthSessionResponse } from "../types/auth.types";

/** The refresh token the backend set as its own httpOnly cookie on this server-to-server response. */
const readRefreshTokenCookie = (response: Response) => {
  const prefix = `${AUTH_REFRESH_TOKEN_COOKIE}=`;
  const cookie = response.headers.getSetCookie().find((header) => header.startsWith(prefix));

  return cookie ? decodeURIComponent(cookie.slice(prefix.length).split(";")[0]) : null;
};

/**
 * Reads a `verify-otp` / `refresh` response. The backend no longer puts the refresh token in the
 * body, only in `Set-Cookie`; the body field is still read so an older backend keeps working.
 */
export const readAuthSession = async (response: Response): Promise<AuthSession | null> => {
  const {
    user,
    accessToken,
    refreshToken: bodyRefreshToken,
  }: AuthSessionResponse = await response.json();
  const refreshToken = readRefreshTokenCookie(response) ?? bodyRefreshToken;

  if (!accessToken || !refreshToken) return null;

  return { user, tokens: { accessToken, refreshToken } };
};
