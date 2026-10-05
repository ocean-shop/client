import {
  DELIVERY_EMPTY_POINTS,
  DELIVERY_POINTS_LIMIT,
  UKRPOSHTA_ACTIVE_LOCK_CODE,
  UKRPOSHTA_CITY_PATH,
  UKRPOSHTA_POSTTERMINAL_FLAG,
  UKRPOSHTA_POST_OFFICES_PATH,
} from "../constants/delivery.constants";
import { findUkrposhtaCityHelper } from "../helpers/find-ukrposhta-city";
import { mapUkrposhtaPostOfficeHelper } from "../helpers/map-ukrposhta-post-office";
import type {
  DeliveryCity,
  DeliveryPoint,
  UkrposhtaCity,
  UkrposhtaPostOffice,
} from "../types/delivery.types";
import { ukrposhtaFetch } from "./ukrposhta-fetch";

/**
 * The classifier has no free-text search over post offices, so the whole city is fetched (and
 * cached) and narrowed down here by index or address.
 */
export async function getUkrposhtaPostOffices(
  city: DeliveryCity,
  searchTerm: string
): Promise<DeliveryPoint[]> {
  const cities = await ukrposhtaFetch<UkrposhtaCity>(
    UKRPOSHTA_CITY_PATH,
    new URLSearchParams({ city_ua: city.name })
  );
  const ukrposhtaCity = findUkrposhtaCityHelper(cities, city);

  if (!ukrposhtaCity) return DELIVERY_EMPTY_POINTS;

  const offices = await ukrposhtaFetch<UkrposhtaPostOffice>(
    UKRPOSHTA_POST_OFFICES_PATH,
    new URLSearchParams({
      city_id: ukrposhtaCity.CITY_ID,
      district_id: ukrposhtaCity.DISTRICT_ID,
      region_id: ukrposhtaCity.REGION_ID,
    })
  );
  const term = searchTerm.trim().toLowerCase();

  return offices
    .filter(
      (office) =>
        office.LOCK_CODE === UKRPOSHTA_ACTIVE_LOCK_CODE &&
        office.POSTTERMINAL !== UKRPOSHTA_POSTTERMINAL_FLAG &&
        (!term || `${office.POSTINDEX} ${office.ADDRESS}`.toLowerCase().includes(term))
    )
    .sort((first, second) => first.POSTINDEX.localeCompare(second.POSTINDEX))
    .slice(0, DELIVERY_POINTS_LIMIT)
    .map(mapUkrposhtaPostOfficeHelper);
}
