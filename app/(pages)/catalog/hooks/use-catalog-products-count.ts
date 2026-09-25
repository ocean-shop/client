"use client";

import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useDebouncedValue } from "@/app/core/hooks/use-debounced-value";
import { getCatalogProductsCountAction } from "@/app/shared/products/actions/get-catalog-products-count";
import { buildCatalogProductsSearchParamsHelper } from "@/app/shared/products/helpers/build-catalog-products-search-params";
import type { CatalogProductsQuery } from "@/app/shared/products/types/products.types";
import {
  CATALOG_PRODUCTS_COUNT_DEBOUNCE_MS,
  CATALOG_PRODUCTS_COUNT_QUERY_KEY,
} from "../constants/catalog.constants";

/**
 * Live total for filters the user is still editing. The serialized query is what gets
 * debounced, so the cache key and the request always describe the same selection.
 */
export function useCatalogProductsCount(
  categoryId: string,
  draftQuery: CatalogProductsQuery,
  isEnabled: boolean
) {
  const searchParams = buildCatalogProductsSearchParamsHelper(draftQuery).toString();
  const debouncedSearchParams = useDebouncedValue(searchParams, CATALOG_PRODUCTS_COUNT_DEBOUNCE_MS);

  const { data, isFetching } = useQuery({
    queryKey: [CATALOG_PRODUCTS_COUNT_QUERY_KEY, categoryId, debouncedSearchParams],
    queryFn: () => getCatalogProductsCountAction(categoryId, debouncedSearchParams),
    placeholderData: keepPreviousData,
    enabled: isEnabled,
  });

  return {
    count: data,
    /** True while waiting out the debounce as well, so the number never looks settled early. */
    isCounting: isEnabled && (isFetching || searchParams !== debouncedSearchParams),
  };
}
