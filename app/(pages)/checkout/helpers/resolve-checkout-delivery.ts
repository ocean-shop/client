import { toUserShippingViewHelper } from "@/app/(pages)/cabinet/(pages)/addresses/helpers/to-user-shipping-view";
import type { UserShipping } from "@/app/(pages)/cabinet/(pages)/addresses/types/addresses.types";
import {
  CHECKOUT_DEFAULT_DELIVERY,
  CHECKOUT_DELIVERY_ADDRESS_SEPARATOR,
  CHECKOUT_DELIVERY_TITLE_SEPARATOR,
} from "../constants/checkout.constants";
import type { CheckoutDelivery } from "../types/checkout.types";
import { findCheckoutDeliveryCityHelper } from "./find-checkout-delivery-city";
import { findCheckoutDeliveryPointHelper } from "./find-checkout-delivery-point";
import { getCheckoutCarrierHelper } from "./get-checkout-carrier";
import { getCheckoutPreferredShippingHelper } from "./get-checkout-preferred-shipping";

/**
 * Turns the user's main address back into a filled-in delivery form. A saved address is a single
 * "title: city, address" line without carrier ids, so the city and the branch are looked up again
 * by name. Whatever cannot be found is left for the user to pick, as for a guest.
 */
export const resolveCheckoutDeliveryHelper = async (
  shippings: UserShipping[]
): Promise<CheckoutDelivery> => {
  const shipping = getCheckoutPreferredShippingHelper(shippings);

  if (!shipping) return CHECKOUT_DEFAULT_DELIVERY;

  const carrier = getCheckoutCarrierHelper(shipping.method);
  const { title, address } = toUserShippingViewHelper(shipping);
  const method = carrier.methods.find(({ label }) => title.includes(label)) ?? carrier.methods[0];
  const delivery: CheckoutDelivery = {
    ...CHECKOUT_DEFAULT_DELIVERY,
    carrier: carrier.id,
    method: method.id,
  };

  const [cityName, ...addressParts] = address.split(CHECKOUT_DELIVERY_ADDRESS_SEPARATOR);
  const city = await findCheckoutDeliveryCityHelper(cityName.trim()).catch(() => null);

  if (!city) return delivery;

  const deliveryInCity = { ...delivery, city };

  // Street and apartment were joined with the same separator the street itself may contain.
  if (method.id === "courier") {
    return { ...deliveryInCity, street: addressParts.join(CHECKOUT_DELIVERY_ADDRESS_SEPARATOR) };
  }

  const pointTitle = title
    .split(CHECKOUT_DELIVERY_TITLE_SEPARATOR)
    .slice(1)
    .join(CHECKOUT_DELIVERY_TITLE_SEPARATOR);
  const point = await findCheckoutDeliveryPointHelper(deliveryInCity, method.id, pointTitle).catch(
    () => null
  );

  return { ...deliveryInCity, point };
};
