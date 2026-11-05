import type { DeliveryMethod } from "@/app/shared/delivery/types/delivery.types";
import type { CheckoutCarrierOption } from "../types/checkout.types";

/** Left undefined when the carrier does not offer the method. */
export const getCheckoutDeliveryMethodHelper = (
  carrier: CheckoutCarrierOption,
  methodId: DeliveryMethod
) => {
  return carrier.methods.find((method) => method.id === methodId);
};
