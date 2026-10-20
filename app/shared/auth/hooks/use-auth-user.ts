"use client";

import { use } from "react";
import { AuthUserContext } from "@/app/core/providers/auth-user-provider/auth-user-context";

/** The signed-in user; only usable below an `AuthUserProvider`, i.e. on protected pages. */
export const useAuthUser = () => {
  const user = use(AuthUserContext);

  if (!user) throw new Error("useAuthUser must be used within an AuthUserProvider");

  return user;
};
