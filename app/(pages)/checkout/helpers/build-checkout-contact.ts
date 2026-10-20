import type { UserProfile } from "@/app/(pages)/cabinet/(pages)/profile/types/profile.types";
import type { AuthUser } from "@/app/shared/auth/types/auth.types";
import { CHECKOUT_EMPTY_CONTACT } from "../constants/checkout.constants";
import type { CheckoutContact } from "../types/checkout.types";

/** The profile's phone wins over the one the user signed in with, since the user typed it in. */
export function buildCheckoutContactHelper(
  user: AuthUser | null,
  profile: UserProfile | null
): CheckoutContact {
  if (!user) return CHECKOUT_EMPTY_CONTACT;

  return {
    name: profile?.fullName?.trim() ?? "",
    email: user.email ?? "",
    phone: profile?.phoneNumber ?? user.mobileNumber ?? "",
  };
}
