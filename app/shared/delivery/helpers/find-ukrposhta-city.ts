import type { DeliveryCity, UkrposhtaCity } from "../types/delivery.types";

function normalize(value: string | null | undefined) {
  return (value ?? "").trim().toLowerCase();
}

/**
 * Picks the Ukrposhta settlement that matches a Nova Poshta one. Names repeat across the country,
 * so the area and district break ties. Ukrposhta files Kyiv under a region of its own, named
 * after the city, hence the region also counts as matching when it equals the city name.
 */
export function findUkrposhtaCityHelper(
  cities: UkrposhtaCity[],
  city: DeliveryCity
): UkrposhtaCity | undefined {
  const name = normalize(city.name);
  const area = normalize(city.area);
  const district = normalize(city.district);

  const scored = cities
    .filter((candidate) => normalize(candidate.CITY_UA) === name)
    .map((candidate) => {
      const region = normalize(candidate.REGION_UA);
      const regionScore = region === area || region === name ? 2 : 0;
      const districtScore =
        district &&
        [candidate.DISTRICT_UA, candidate.NEW_DISTRICT_UA].some(
          (value) => normalize(value) === district
        )
          ? 1
          : 0;

      return { candidate, score: regionScore + districtScore };
    });

  return scored.sort((first, second) => second.score - first.score)[0]?.candidate;
}
