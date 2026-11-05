import { isCheckoutManualPointCompleteHelper } from "@/app/(pages)/checkout/helpers/is-checkout-manual-point-complete";
import type { CheckoutDelivery } from "@/app/(pages)/checkout/types/checkout.types";
import { CABINET_ADDRESS_FORM_VALIDATION_MESSAGES } from "../constants/cabinet-address-form.constants";
import type { CabinetAddressFormErrors } from "../types/cabinet-address-form.types";

/** A courier needs a street, every other method a branch or parcel locker; `null` when it can be saved. */
export const validateCabinetAddressFormHelper = (
  delivery: CheckoutDelivery
): CabinetAddressFormErrors | null => {
  if (delivery.method === "courier") {
    return delivery.street.trim()
      ? null
      : { street: CABINET_ADDRESS_FORM_VALIDATION_MESSAGES.street };
  }

  if (delivery.point) return null;

  if (delivery.manualPoint) {
    return isCheckoutManualPointCompleteHelper(delivery.manualPoint)
      ? null
      : { point: CABINET_ADDRESS_FORM_VALIDATION_MESSAGES.manualPoint };
  }

  return { point: CABINET_ADDRESS_FORM_VALIDATION_MESSAGES.point };
};
