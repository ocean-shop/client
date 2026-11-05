import {
  DELIVERY_CITY_SELECT_EMPTY_LABEL,
  DELIVERY_CITY_SELECT_ERROR_LABEL,
  DELIVERY_CITY_SELECT_POPULAR_LABEL,
  DELIVERY_CITY_SELECT_SEARCHING_LABEL,
} from "../constants/delivery-city-select.constants";
import type { DeliveryCitySelectStatusState } from "../types/delivery-city-select.types";

/** The line above the options, or `null` when the found cities speak for themselves. */
export const getDeliveryCitySelectStatusHelper = ({
  hasSearchableTerm,
  isSearching,
  isError,
  hasOptions,
}: DeliveryCitySelectStatusState): string | null => {
  if (!hasSearchableTerm) return DELIVERY_CITY_SELECT_POPULAR_LABEL;
  if (isSearching) return DELIVERY_CITY_SELECT_SEARCHING_LABEL;
  if (isError) return DELIVERY_CITY_SELECT_ERROR_LABEL;

  return hasOptions ? null : DELIVERY_CITY_SELECT_EMPTY_LABEL;
};
