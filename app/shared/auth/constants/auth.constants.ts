export const AUTH_LOGIN_PAGE_PATH = "/login";
export const AUTH_HOME_PAGE_PATH = "/";
export const AUTH_CABINET_PAGE_PATH = "/cabinet";
/** Query param the proxy puts on `/login` so the user lands back where they were sent from. */
export const AUTH_REDIRECT_PARAM = "redirect";
/** Path prefixes that need a signed-in user; the proxy sends everyone else to `/login`. */
export const AUTH_PROTECTED_PATHS = [AUTH_CABINET_PAGE_PATH];

export const AUTH_API_URL = `${process.env.API_BASE_URL}/user/auth`;
export const AUTH_CLIENT_API_URL = `${AUTH_API_URL}/client`;

export const AUTH_REQUEST_HEADERS = { "Content-Type": "application/json" };

export const AUTH_ACCESS_TOKEN_COOKIE = "access_token";
export const AUTH_REFRESH_TOKEN_COOKIE = "refresh_token";

/** A minute shorter than the 15-minute JWT so the cookie never outlives the token it holds. */
export const AUTH_ACCESS_TOKEN_MAX_AGE_SECONDS = 14 * 60;
export const AUTH_REFRESH_TOKEN_MAX_AGE_SECONDS = 7 * 24 * 60 * 60;

export const AUTH_COOKIE_OPTIONS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax",
  path: "/",
} as const;

/**
 * How long a finished refresh is reused for the same refresh token, so parallel requests that
 * still carry the old cookies do not rotate it a second time and get rejected.
 */
export const AUTH_REFRESH_REUSE_MS = 10_000;
