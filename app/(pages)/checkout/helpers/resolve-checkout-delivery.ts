import { toUserShippingViewHelper } from "@/app/(pages)/cabinet/(pages)/addresses/helpers/to-user-shipping-view";
import type { UserShipping } from "@/app/(pages)/cabinet/(pages)/addresses/types/addresses.types";
import { getNovaPoshtaWarehouses } from "@/app/shared/delivery/api/get-nova-poshta-warehouses";
import { getUkrposhtaPostOffices } from "@/app/shared/delivery/api/get-ukrposhta-post-offices";
import { searchNovaPoshtaSettlements } from "@/app/shared/delivery/api/search-nova-poshta-settlements";
import { DELIVERY_POPULAR_CITIES } from "@/app/shared/delivery/constants/delivery.constants";
import { isDeliveryCarrierEnabledHelper } from "@/app/shared/delivery/helpers/is-delivery-carrier-enabled";
import type {
  DeliveryCity,
  DeliveryPoint,
  DeliveryPointMethod,
} from "@/app/shared/delivery/types/delivery.types";
import {
  CHECKOUT_DEFAULT_DELIVERY,
  CHECKOUT_DELIVERY_ADDRESS_SEPARATOR,
  CHECKOUT_DELIVERY_POINT_NUMBER_PATTERN,
  CHECKOUT_DELIVERY_TITLE_SEPARATOR,
} from "../constants/checkout.constants";
import type { CheckoutDelivery } from "../types/checkout.types";
import { getCheckoutCarrierHelper } from "./get-checkout-carrier";

/** The popular list carries the right ref for big cities; anything else is looked up by name. */
async function findCity(name: string): Promise<DeliveryCity | null> {
  const popularCity = DELIVERY_POPULAR_CITIES.find((city) => city.name === name);

  if (popularCity) return popularCity;

  const cities = await searchNovaPoshtaSettlements(name);

  return cities.find((city) => city.name === name) ?? null;
}

/** Searches by the point's number, so the match does not depend on the first page of results. */
async function findPoint(
  delivery: CheckoutDelivery,
  method: DeliveryPointMethod,
  title: string
): Promise<DeliveryPoint | null> {
  const searchTerm = title.match(CHECKOUT_DELIVERY_POINT_NUMBER_PATTERN)?.[0] ?? "";
  const points =
    delivery.carrier === "ukr"
      ? await getUkrposhtaPostOffices(delivery.city, searchTerm)
      : await getNovaPoshtaWarehouses(delivery.city.id, method, searchTerm);

  return points.find((point) => point.title === title) ?? null;
}

/**
 * Turns the user's main address back into a filled-in delivery form. A saved address is a single
 * "title: city, address" line without carrier ids, so the city and the branch are looked up again
 * by name. Whatever cannot be found is left for the user to pick, as for a guest. Addresses of a
 * carrier the shop no longer ships with are skipped.
 */
export async function resolveCheckoutDeliveryHelper(
  shippings: UserShipping[]
): Promise<CheckoutDelivery> {
  const availableShippings = shippings.filter(({ method }) =>
    isDeliveryCarrierEnabledHelper(method)
  );
  const shipping = availableShippings.find(({ isMain }) => isMain) ?? availableShippings[0];

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
  const city = await findCity(cityName.trim()).catch(() => null);

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
  const point = await findPoint(deliveryInCity, method.id, pointTitle).catch(() => null);

  return { ...deliveryInCity, point };
}
