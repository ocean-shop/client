"use client";

import { AuthUserContext } from "./auth-user-context";
import type { AuthUserProviderProps } from "./types/auth-user-provider.types";

/** Hands the user a server layout has already checked down to the client components below it. */
export function AuthUserProvider({ user, children }: AuthUserProviderProps) {
  return <AuthUserContext value={user}>{children}</AuthUserContext>;
}
