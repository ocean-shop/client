import type { CheckoutContact } from "@/app/(pages)/checkout/types/checkout.types";

export type CheckoutContactProps = {
  contact: CheckoutContact;
  /** Signed-in users already have their details filled in, so the sign-in prompt is hidden. */
  isSignedIn: boolean;
  onChange: (contact: CheckoutContact) => void;
};
