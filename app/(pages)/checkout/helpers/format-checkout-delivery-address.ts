import {
  CHECKOUT_DELIVERY_ADDRESS_SEPARATOR,
  CHECKOUT_DELIVERY_TITLE_SEPARATOR,
  CHECKOUT_MANUAL_POINT_TITLES,
} from "../constants/checkout.constants";
import type { CheckoutDelivery, CheckoutDeliveryAddress } from "../types/checkout.types";
import { getCheckoutCarrierHelper } from "./get-checkout-carrier";
import { isCheckoutManualPointCompleteHelper } from "./is-checkout-manual-point-complete";

export const formatCheckoutDeliveryAddressHelper = (
  delivery: CheckoutDelivery
): CheckoutDeliveryAddress => {
  const carrier = getCheckoutCarrierHelper(delivery.carrier);
  const methodLabel = carrier.methods.find((method) => method.id === delivery.method)?.label ?? "";

  if (delivery.method !== "courier" && delivery.point) {
    return {
      title: [carrier.label, delivery.point.title].join(CHECKOUT_DELIVERY_TITLE_SEPARATOR),
      address: [delivery.city.name, delivery.point.address].join(
        CHECKOUT_DELIVERY_ADDRESS_SEPARATOR
      ),
    };
  }

  // The settlement typed in by hand replaces the selected city, which it may not be listed under.
  if (delivery.method !== "courier" && isCheckoutManualPointCompleteHelper(delivery.manualPoint)) {
    const pointTitle = CHECKOUT_MANUAL_POINT_TITLES[carrier.id](
      methodLabel,
      delivery.manualPoint.number.trim()
    );

    return {
      title: [carrier.label, pointTitle].join(CHECKOUT_DELIVERY_TITLE_SEPARATOR),
      address: delivery.manualPoint.city.trim(),
    };
  }

  return {
    title: [carrier.label, methodLabel].join(CHECKOUT_DELIVERY_TITLE_SEPARATOR),
    address: [delivery.city.name, delivery.street.trim(), delivery.apartment.trim()]
      .filter(Boolean)
      .join(CHECKOUT_DELIVERY_ADDRESS_SEPARATOR),
  };
};
