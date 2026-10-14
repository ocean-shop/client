import { formatCheckoutDeliveryAddressHelper } from "@/app/(pages)/checkout/helpers/format-checkout-delivery-address";
import type { CheckoutDelivery } from "@/app/(pages)/checkout/types/checkout.types";
import {
  SHIPPING_ADDRESS_MAX_LENGTH,
  SHIPPING_ADDRESS_SEPARATOR,
} from "../../../../../../../constants/addresses.constants";
import type { CreateUserShippingRequest } from "../../../../../../../types/addresses.types";

/** Saves the address as the same "title: address" line checkout puts on an order. */
export function buildCabinetAddressRequestHelper(
  delivery: CheckoutDelivery,
  isMain: boolean
): CreateUserShippingRequest {
  const { title, address } = formatCheckoutDeliveryAddressHelper(delivery);

  return {
    method: delivery.carrier,
    isMain,
    address: `${title}${SHIPPING_ADDRESS_SEPARATOR}${address}`.slice(
      0,
      SHIPPING_ADDRESS_MAX_LENGTH
    ),
  };
}
