import {
  DELIVERY_EMPTY_POINTS,
  UKRPOSHTA_CITY_PATH,
  UKRPOSHTA_POST_OFFICES_PATH,
} from "../constants/delivery.constants";
import { filterUkrposhtaPostOfficesHelper } from "../helpers/filter-ukrposhta-post-offices";
import { findUkrposhtaCityHelper } from "../helpers/find-ukrposhta-city";
import { mapUkrposhtaPostOfficeHelper } from "../helpers/map-ukrposhta-post-office";
import type {
  DeliveryCity,
  DeliveryPoint,
  UkrposhtaCity,
  UkrposhtaPostOffice,
} from "../types/delivery.types";
import { ukrposhtaFetch } from "./ukrposhta-fetch";

/** The whole city's post offices are fetched (and cached), then narrowed down by the term. */
export const getUkrposhtaPostOffices = async (
  city: DeliveryCity,
  searchTerm: string
): Promise<DeliveryPoint[]> => {
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

  return filterUkrposhtaPostOfficesHelper(offices, searchTerm).map(mapUkrposhtaPostOfficeHelper);
};
