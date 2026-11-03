import { getSearchParamValues } from "@/app/core/search-params/helpers/get-search-param-values";
import type { SearchParamValue } from "@/app/core/search-params/types/search-params.types";
import { CATALOG_PRODUCTS_CATEGORY_ID_SEPARATOR } from "../constants/products.constants";

/** Reads `categoryIds=id1,id2`, repeated or joined, the way the endpoint accepts them. */
export const parseCatalogCategoryIdsHelper = (value: SearchParamValue): string[] => {
  const categoryIds = getSearchParamValues(value)
    .flatMap((entry) => entry.split(CATALOG_PRODUCTS_CATEGORY_ID_SEPARATOR))
    .map((categoryId) => categoryId.trim())
    .filter(Boolean);

  return [...new Set(categoryIds)];
};
