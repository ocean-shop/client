import { getFirstSearchParamValue } from "@/app/core/search-params/helpers/get-first-search-param-value";
import type { SearchParamValue } from "@/app/core/search-params/types/search-params.types";
import { AUTH_HOME_PAGE_PATH } from "../constants/auth.constants";

/** Only same-site paths are honoured, so `?redirect=` cannot send the user to another origin. */
export const resolveAuthRedirect = (value: SearchParamValue) => {
  const path = getFirstSearchParamValue(value);

  if (!path?.startsWith("/") || path.startsWith("//") || path.startsWith("/\\")) {
    return AUTH_HOME_PAGE_PATH;
  }

  return path;
};
