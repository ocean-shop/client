"use server";

import { searchNovaPoshtaSettlements } from "../api/search-nova-poshta-settlements";
import {
  DELIVERY_EMPTY_CITIES,
  DELIVERY_SEARCH_TERM_MAX_LENGTH,
} from "../constants/delivery.constants";
import type { DeliveryCity } from "../types/delivery.types";

/**
 * Settlement suggestions for the checkout city field. Runs as an action because the carrier API
 * keys are server-only and the field queries while the visitor is still typing.
 */
export async function searchDeliveryCitiesAction(cityName: string): Promise<DeliveryCity[]> {
  const term = cityName.trim().slice(0, DELIVERY_SEARCH_TERM_MAX_LENGTH);

  if (!term) return DELIVERY_EMPTY_CITIES;

  return searchNovaPoshtaSettlements(term);
}
