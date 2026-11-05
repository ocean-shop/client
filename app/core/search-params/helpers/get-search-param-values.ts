import type { SearchParamValue } from "../types/search-params.types";

/** Every value of a search param, however many times it was given. */
export const getSearchParamValues = (value: SearchParamValue): string[] => {
  if (value === undefined) return [];

  return Array.isArray(value) ? value : [value];
};
