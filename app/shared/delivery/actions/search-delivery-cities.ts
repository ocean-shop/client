"use server";

import { searchNovaPoshtaSettlements } from "../api/search-nova-poshta-settlements";
import {
  DELIVERY_EMPTY_CITIES,
  DELIVERY_SEARCH_TERM_MAX_LENGTH,
} from "../constants/delivery.constants";
import { getDeliveryErrorStatusHelper } from "../helpers/get-delivery-error-status";
import type { DeliveryCitiesResult } from "../types/delivery.types";

/**
 * Settlement suggestions for the checkout city field. Runs as an action because the carrier API
 * keys are server-only and the field queries while the visitor is still typing. A failed carrier
 * call is reported in the result rather than thrown, so it does not surface as a 500.
 */
export const searchDeliveryCitiesAction = async (
  cityName: string
): Promise<DeliveryCitiesResult> => {
  const term = cityName.trim().slice(0, DELIVERY_SEARCH_TERM_MAX_LENGTH);

  if (!term) return { ok: true, cities: DELIVERY_EMPTY_CITIES };

  try {
    return { ok: true, cities: await searchNovaPoshtaSettlements(term) };
  } catch (error) {
    return { ok: false, status: getDeliveryErrorStatusHelper(error) };
  }
};
