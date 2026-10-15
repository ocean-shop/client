"use client";

import { createContext } from "react";
import type { AuthUser } from "@/app/shared/auth/types/auth.types";

export const AuthUserContext = createContext<AuthUser | null>(null);
