import {
  AUTH_ACCESS_TOKEN_COOKIE,
  AUTH_ACCESS_TOKEN_MAX_AGE_SECONDS,
  AUTH_COOKIE_OPTIONS,
  AUTH_REFRESH_TOKEN_COOKIE,
  AUTH_REFRESH_TOKEN_MAX_AGE_SECONDS,
} from "../constants/auth.constants";
import type { AuthCookieStore, AuthTokens } from "../types/auth.types";

/** Stores both tokens as httpOnly cookies on the shop's own domain. */
export function setAuthSessionCookies(store: AuthCookieStore, tokens: AuthTokens) {
  store.set(AUTH_ACCESS_TOKEN_COOKIE, tokens.accessToken, {
    ...AUTH_COOKIE_OPTIONS,
    maxAge: AUTH_ACCESS_TOKEN_MAX_AGE_SECONDS,
  });
  store.set(AUTH_REFRESH_TOKEN_COOKIE, tokens.refreshToken, {
    ...AUTH_COOKIE_OPTIONS,
    maxAge: AUTH_REFRESH_TOKEN_MAX_AGE_SECONDS,
  });
}

export function clearAuthSessionCookies(store: AuthCookieStore) {
  store.delete(AUTH_ACCESS_TOKEN_COOKIE);
  store.delete(AUTH_REFRESH_TOKEN_COOKIE);
}
