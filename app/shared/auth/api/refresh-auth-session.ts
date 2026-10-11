import {
  AUTH_API_URL,
  AUTH_REFRESH_REUSE_MS,
  AUTH_REFRESH_TOKEN_COOKIE,
} from "../constants/auth.constants";
import type { AuthSessionResponse, AuthTokens } from "../types/auth.types";

const pendingRefreshes = new Map<string, Promise<AuthTokens | null>>();

async function requestRefresh(refreshToken: string, userAgent: string | null) {
  try {
    const response = await fetch(`${AUTH_API_URL}/refresh`, {
      method: "POST",
      headers: {
        Cookie: `${AUTH_REFRESH_TOKEN_COOKIE}=${refreshToken}`,
        ...(userAgent && { "User-Agent": userAgent }),
      },
      cache: "no-store",
    });

    if (!response.ok) return null;

    const { accessToken, refreshToken: nextRefreshToken }: AuthSessionResponse =
      await response.json();

    return { accessToken, refreshToken: nextRefreshToken };
  } catch {
    return null;
  }
}

/**
 * Trades the refresh token for a new pair, or `null` once it is no longer valid. The backend
 * rotates the token on every call, so concurrent requests holding the same one share a single
 * refresh instead of racing and invalidating each other.
 */
export function refreshAuthSession(refreshToken: string, userAgent: string | null) {
  const pending = pendingRefreshes.get(refreshToken);

  if (pending) return pending;

  const refresh = requestRefresh(refreshToken, userAgent);

  pendingRefreshes.set(refreshToken, refresh);
  refresh.finally(() =>
    setTimeout(() => pendingRefreshes.delete(refreshToken), AUTH_REFRESH_REUSE_MS)
  );

  return refresh;
}
