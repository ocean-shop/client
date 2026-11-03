import { redirect } from "next/navigation";
import { AUTH_CABINET_PAGE_PATH } from "../constants/auth.constants";
import { buildAuthLoginHref } from "./build-auth-login-href";
import { getAuthUser } from "./get-auth-user";

/**
 * The signed-in user, sending guests to `/login` instead. The proxy already turns guests away
 * from protected paths; this is the check next to the data, which every protected page should
 * make itself, because layouts are not re-rendered on client-side navigation.
 */
export const requireAuthUser = async (redirectTo = AUTH_CABINET_PAGE_PATH) => {
  const user = await getAuthUser();

  if (!user) redirect(buildAuthLoginHref(redirectTo));

  return user;
};
