import {
  CHECKOUT_DELIVERY_ADDRESS_SEPARATOR,
  CHECKOUT_DELIVERY_TITLE_SEPARATOR,
} from "../constants/checkout.constants";
import type { CheckoutDelivery, CheckoutDeliveryAddress } from "../types/checkout.types";
import { getCheckoutCarrierHelper } from "./get-checkout-carrier";

export const formatCheckoutDeliveryAddressHelper = (
  delivery: CheckoutDelivery
): CheckoutDeliveryAddress => {
  const carrier = getCheckoutCarrierHelper(delivery.carrier);
  const methodLabel = carrier.methods.find((method) => method.id === delivery.method)?.label ?? "";

  if (delivery.method === "courier" || !delivery.point) {
    return {
      title: [carrier.label, methodLabel].join(CHECKOUT_DELIVERY_TITLE_SEPARATOR),
      address: [delivery.city.name, delivery.street.trim(), delivery.apartment.trim()]
        .filter(Boolean)
        .join(CHECKOUT_DELIVERY_ADDRESS_SEPARATOR),
    };
  }

  return {
    title: [carrier.label, delivery.point.title].join(CHECKOUT_DELIVERY_TITLE_SEPARATOR),
    address: [delivery.city.name, delivery.point.address].join(CHECKOUT_DELIVERY_ADDRESS_SEPARATOR),
  };
};
