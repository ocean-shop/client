"use server";

import { getAuthUser } from "../helpers/get-auth-user";

/**
 * Whether the visitor has a session. Public pages ask on demand, right before an action that
 * needs one, so they can still be rendered without reading cookies.
 */
export const getIsSignedInAction = async (): Promise<boolean> => {
  return Boolean(await getAuthUser());
};
