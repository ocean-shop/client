import {
  DELIVERY_CITY_SEARCH_LIMIT,
  NOVA_POSHTA_SEARCH_SETTLEMENTS_METHOD,
} from "../constants/delivery.constants";
import { mapNovaPoshtaSettlementHelper } from "../helpers/map-nova-poshta-settlement";
import type { DeliveryCity, NovaPoshtaSettlementsData } from "../types/delivery.types";
import { novaPoshtaFetch } from "./nova-poshta-fetch";

export async function searchNovaPoshtaSettlements(cityName: string): Promise<DeliveryCity[]> {
  const [result] = await novaPoshtaFetch<NovaPoshtaSettlementsData>(
    NOVA_POSHTA_SEARCH_SETTLEMENTS_METHOD,
    { CityName: cityName, Limit: String(DELIVERY_CITY_SEARCH_LIMIT), Page: "1" }
  );

  return (result?.Addresses ?? []).map(mapNovaPoshtaSettlementHelper);
}
