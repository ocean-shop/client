"use server";

import { getNovaPoshtaWarehouses } from "../api/get-nova-poshta-warehouses";
import { getUkrposhtaPostOffices } from "../api/get-ukrposhta-post-offices";
import {
  DELIVERY_EMPTY_POINTS,
  DELIVERY_SEARCH_TERM_MAX_LENGTH,
} from "../constants/delivery.constants";
import { getDeliveryErrorStatusHelper } from "../helpers/get-delivery-error-status";
import { isDeliveryCarrierEnabledHelper } from "../helpers/is-delivery-carrier-enabled";
import type { DeliveryPointsRequest, DeliveryPointsResult } from "../types/delivery.types";

/**
 * Branches and parcel lockers a parcel can be picked up from, straight from the carrier. A failed
 * carrier call is reported in the result rather than thrown, so it does not surface as a 500.
 */
export const getDeliveryPointsAction = async ({
  carrier,
  method,
  city,
  searchTerm,
}: DeliveryPointsRequest): Promise<DeliveryPointsResult> => {
  const term = searchTerm.trim().slice(0, DELIVERY_SEARCH_TERM_MAX_LENGTH);

  if (!isDeliveryCarrierEnabledHelper(carrier)) return { ok: true, points: DELIVERY_EMPTY_POINTS };

  try {
    const points =
      carrier === "ukr"
        ? await getUkrposhtaPostOffices(city, term)
        : await getNovaPoshtaWarehouses(city.id, method, term);

    return { ok: true, points };
  } catch (error) {
    return { ok: false, status: getDeliveryErrorStatusHelper(error) };
  }
};
