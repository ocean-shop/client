import { AUTH_LOGIN_PAGE_PATH, AUTH_REDIRECT_PARAM } from "../constants/auth.constants";

/** The login page, set to bring the user back to `redirectTo` once signed in. */
export const buildAuthLoginHref = (redirectTo: string): string =>
  `${AUTH_LOGIN_PAGE_PATH}?${AUTH_REDIRECT_PARAM}=${encodeURIComponent(redirectTo)}`;
