"use server";

import { getNovaPoshtaWarehouses } from "../api/get-nova-poshta-warehouses";
import { getUkrposhtaPostOffices } from "../api/get-ukrposhta-post-offices";
import { DELIVERY_SEARCH_TERM_MAX_LENGTH } from "../constants/delivery.constants";
import type { DeliveryPoint, DeliveryPointsRequest } from "../types/delivery.types";

/** Branches and parcel lockers a parcel can be picked up from, straight from the carrier. */
export async function getDeliveryPointsAction({
  carrier,
  method,
  city,
  searchTerm,
}: DeliveryPointsRequest): Promise<DeliveryPoint[]> {
  const term = searchTerm.trim().slice(0, DELIVERY_SEARCH_TERM_MAX_LENGTH);

  if (carrier === "ukr") return getUkrposhtaPostOffices(city, term);

  return getNovaPoshtaWarehouses(city.id, method, term);
}
