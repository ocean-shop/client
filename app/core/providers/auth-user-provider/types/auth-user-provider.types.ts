import type { AuthUser } from "@/app/shared/auth/types/auth.types";

export type AuthUserProviderProps = {
  user: AuthUser;
  children: React.ReactNode;
};
