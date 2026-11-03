import {
  DELIVERY_POINTS_LIMIT,
  UKRPOSHTA_ACTIVE_LOCK_CODE,
  UKRPOSHTA_POSTTERMINAL_FLAG,
} from "../constants/delivery.constants";
import type { UkrposhtaPostOffice } from "../types/delivery.types";

const isOpenPostOffice = (office: UkrposhtaPostOffice) =>
  office.LOCK_CODE === UKRPOSHTA_ACTIVE_LOCK_CODE &&
  office.POSTTERMINAL !== UKRPOSHTA_POSTTERMINAL_FLAG;

/**
 * Open branches of a city whose index or address contains the term, ordered by index. Ukrposhta
 * has no free-text search over post offices, so the narrowing happens here.
 */
export const filterUkrposhtaPostOfficesHelper = (
  offices: UkrposhtaPostOffice[],
  searchTerm: string
): UkrposhtaPostOffice[] => {
  const term = searchTerm.trim().toLowerCase();

  return offices
    .filter(
      (office) =>
        isOpenPostOffice(office) &&
        (!term || `${office.POSTINDEX} ${office.ADDRESS}`.toLowerCase().includes(term))
    )
    .sort((first, second) => first.POSTINDEX.localeCompare(second.POSTINDEX))
    .slice(0, DELIVERY_POINTS_LIMIT);
};
