import { searchNovaPoshtaSettlements } from "@/app/shared/delivery/api/search-nova-poshta-settlements";
import { DELIVERY_POPULAR_CITIES } from "@/app/shared/delivery/constants/delivery.constants";
import type { DeliveryCity } from "@/app/shared/delivery/types/delivery.types";

/** The popular list carries the right ref for big cities; anything else is looked up by name. */
export const findCheckoutDeliveryCityHelper = async (
  name: string
): Promise<DeliveryCity | null> => {
  const popularCity = DELIVERY_POPULAR_CITIES.find((city) => city.name === name);

  if (popularCity) return popularCity;

  const cities = await searchNovaPoshtaSettlements(name);

  return cities.find((city) => city.name === name) ?? null;
};
