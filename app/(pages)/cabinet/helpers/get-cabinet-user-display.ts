import type { AuthUser } from "@/app/shared/auth/types/auth.types";
import type { CabinetUserDisplay } from "../types/cabinet.types";
import { formatCabinetPhoneHelper } from "./format-cabinet-phone";

/** Users sign in with an email or a phone, so whichever they have becomes the headline. */
export const getCabinetUserDisplayHelper = (user: AuthUser): CabinetUserDisplay => {
  const phone = user.mobileNumber ? formatCabinetPhoneHelper(user.mobileNumber) : null;

  if (user.email) {
    return { title: user.email, subtitle: phone, initial: user.email[0].toUpperCase() };
  }

  return { title: phone ?? "", subtitle: null, initial: null };
};
