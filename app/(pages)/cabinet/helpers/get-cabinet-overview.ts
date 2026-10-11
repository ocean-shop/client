import { CABINET_EMPTY_OVERVIEW } from "../constants/cabinet.constants";
import type { CabinetOverview } from "../types/cabinet.types";

/**
 * Everything the cabinet's overview shows. The backend has no client endpoints for orders,
 * favourites or addresses yet, so it starts empty; fill each field in as its endpoint appears.
 */
export async function getCabinetOverviewHelper(): Promise<CabinetOverview> {
  return CABINET_EMPTY_OVERVIEW;
}
