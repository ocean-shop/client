import {
  CHECKOUT_EMAIL_PATTERN,
  CHECKOUT_NAME_MIN_WORDS,
  CHECKOUT_PHONE_PATTERN,
  CHECKOUT_PHONE_SEPARATORS_PATTERN,
  CHECKOUT_VALIDATION_MESSAGES,
} from "../constants/checkout.constants";
import type { CheckoutContact, CheckoutDelivery } from "../types/checkout.types";

/** Returns the message for the first field that still needs attention, or `null` when all is set. */
export function validateCheckoutFormHelper(
  contact: CheckoutContact,
  delivery: CheckoutDelivery
): string | null {
  if (contact.name.trim().split(/\s+/).filter(Boolean).length < CHECKOUT_NAME_MIN_WORDS) {
    return CHECKOUT_VALIDATION_MESSAGES.name;
  }

  if (!CHECKOUT_EMAIL_PATTERN.test(contact.email.trim())) {
    return CHECKOUT_VALIDATION_MESSAGES.email;
  }

  if (!CHECKOUT_PHONE_PATTERN.test(contact.phone.replace(CHECKOUT_PHONE_SEPARATORS_PATTERN, ""))) {
    return CHECKOUT_VALIDATION_MESSAGES.phone;
  }

  if (delivery.method === "courier") {
    return delivery.street.trim() ? null : CHECKOUT_VALIDATION_MESSAGES.street;
  }

  return delivery.point ? null : CHECKOUT_VALIDATION_MESSAGES.point;
}
