import type { CheckoutContact } from "@/app/(pages)/checkout/types/checkout.types";

export type CheckoutContactProps = {
  contact: CheckoutContact;
  onChange: (contact: CheckoutContact) => void;
};
