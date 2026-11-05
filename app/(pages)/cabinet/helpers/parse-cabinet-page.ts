import { getFirstSearchParamValue } from "@/app/core/search-params/helpers/get-first-search-param-value";
import type { SearchParamValue } from "@/app/core/search-params/types/search-params.types";

/** Anything but a positive whole number falls back to the first page. */
export const parseCabinetPageHelper = (value: SearchParamValue): number => {
  const page = Number(getFirstSearchParamValue(value));

  return Number.isInteger(page) && page > 0 ? page : 1;
};
