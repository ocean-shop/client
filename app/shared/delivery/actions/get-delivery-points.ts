"use server";

import { getNovaPoshtaWarehouses } from "../api/get-nova-poshta-warehouses";
import { getUkrposhtaPostOffices } from "../api/get-ukrposhta-post-offices";
import {
  DELIVERY_EMPTY_POINTS,
  DELIVERY_SEARCH_TERM_MAX_LENGTH,
} from "../constants/delivery.constants";
import { isDeliveryCarrierEnabledHelper } from "../helpers/is-delivery-carrier-enabled";
import type { DeliveryPoint, DeliveryPointsRequest } from "../types/delivery.types";

/** Branches and parcel lockers a parcel can be picked up from, straight from the carrier. */
export const getDeliveryPointsAction = async ({
  carrier,
  method,
  city,
  searchTerm,
}: DeliveryPointsRequest): Promise<DeliveryPoint[]> => {
  const term = searchTerm.trim().slice(0, DELIVERY_SEARCH_TERM_MAX_LENGTH);

  if (!isDeliveryCarrierEnabledHelper(carrier)) return DELIVERY_EMPTY_POINTS;

  if (carrier === "ukr") return getUkrposhtaPostOffices(city, term);

  return getNovaPoshtaWarehouses(city.id, method, term);
};
