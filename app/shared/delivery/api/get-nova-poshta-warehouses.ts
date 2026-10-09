import {
  DELIVERY_POINTS_LIMIT,
  NOVA_POSHTA_GET_WAREHOUSES_METHOD,
  NOVA_POSHTA_POSTOMAT_TYPE_REF,
} from "../constants/delivery.constants";
import { mapNovaPoshtaWarehouseHelper } from "../helpers/map-nova-poshta-warehouse";
import type {
  DeliveryPoint,
  DeliveryPointMethod,
  NovaPoshtaWarehouse,
} from "../types/delivery.types";
import { novaPoshtaFetch } from "./nova-poshta-fetch";

/**
 * Parcel lockers have a type of their own to filter by. Branches span several types (cargo,
 * postal, partner points), so they are fetched together and the lockers dropped afterwards.
 */
export async function getNovaPoshtaWarehouses(
  cityRef: string,
  method: DeliveryPointMethod,
  searchTerm: string
): Promise<DeliveryPoint[]> {
  const isPostomat = method === "postomat";
  const warehouses = await novaPoshtaFetch<NovaPoshtaWarehouse>(NOVA_POSHTA_GET_WAREHOUSES_METHOD, {
    CityRef: cityRef,
    FindByString: searchTerm,
    Limit: String(DELIVERY_POINTS_LIMIT),
    Page: "1",
    ...(isPostomat && { TypeOfWarehouseRef: NOVA_POSHTA_POSTOMAT_TYPE_REF }),
  });

  return warehouses
    .filter((warehouse) => isPostomat || warehouse.CategoryOfWarehouse !== "Postomat")
    .map(mapNovaPoshtaWarehouseHelper);
}
