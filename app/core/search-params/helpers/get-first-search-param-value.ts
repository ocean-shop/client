import type { SearchParamValue } from "../types/search-params.types";
import { getSearchParamValues } from "./get-search-param-values";

/** The first value of a search param; repeats beyond it are ignored. */
export const getFirstSearchParamValue = (value: SearchParamValue): string | undefined => {
  return getSearchParamValues(value)[0];
};
