import { redirect } from "next/navigation";
import {
  AUTH_CABINET_PAGE_PATH,
  AUTH_LOGIN_PAGE_PATH,
  AUTH_REDIRECT_PARAM,
} from "../constants/auth.constants";
import { getAuthUser } from "./get-auth-user";

/**
 * The signed-in user, sending guests to `/login` instead. The proxy already turns guests away
 * from protected paths; this is the check next to the data, which every protected page should
 * make itself, because layouts are not re-rendered on client-side navigation.
 */
export const requireAuthUser = async (redirectTo = AUTH_CABINET_PAGE_PATH) => {
  const user = await getAuthUser();

  if (!user) {
    redirect(`${AUTH_LOGIN_PAGE_PATH}?${AUTH_REDIRECT_PARAM}=${encodeURIComponent(redirectTo)}`);
  }

  return user;
};
