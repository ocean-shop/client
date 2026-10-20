import type { CheckoutContact, CheckoutDelivery } from "../../../types/checkout.types";

/** Signed-in users get their profile and the carrier of their main address filled in. */
export type CheckoutViewProps = {
  initialContact: CheckoutContact;
  initialDelivery: CheckoutDelivery;
  isSignedIn: boolean;
};
