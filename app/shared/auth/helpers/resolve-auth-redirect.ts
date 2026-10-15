import { AUTH_HOME_PAGE_PATH } from "../constants/auth.constants";

/** Only same-site paths are honoured, so `?redirect=` cannot send the user to another origin. */
export function resolveAuthRedirect(value: string | string[] | undefined) {
  const path = Array.isArray(value) ? value[0] : value;

  if (!path?.startsWith("/") || path.startsWith("//") || path.startsWith("/\\")) {
    return AUTH_HOME_PAGE_PATH;
  }

  return path;
}
