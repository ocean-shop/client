"use client";

import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useDebouncedValue } from "@/app/core/hooks/use-debounced-value";
import { searchProductsAction } from "@/app/shared/products/actions/search-products";
import { PRODUCT_SEARCH_TERM_MIN_LENGTH } from "@/app/shared/products/constants/products.constants";
import {
  HEADER_SEARCH_DEBOUNCE_MS,
  HEADER_SEARCH_QUERY_KEY,
} from "../constants/header-search.constants";

/**
 * Suggestions for the term being typed. The debounced term is both the cache key and the
 * request, so the panel never shows results for a term the visitor has moved past.
 */
export function useProductSearch(searchTerm: string, isEnabled: boolean) {
  const debouncedSearchTerm = useDebouncedValue(searchTerm, HEADER_SEARCH_DEBOUNCE_MS);
  const hasSearchableTerm = debouncedSearchTerm.length >= PRODUCT_SEARCH_TERM_MIN_LENGTH;

  const { data, isFetching } = useQuery({
    queryKey: [HEADER_SEARCH_QUERY_KEY, debouncedSearchTerm],
    queryFn: () => searchProductsAction(debouncedSearchTerm),
    placeholderData: keepPreviousData,
    enabled: isEnabled && hasSearchableTerm,
  });

  return {
    result: data,
    /** True while waiting out the debounce as well, so stale rows never look settled. */
    isSearching: isEnabled && (isFetching || searchTerm !== debouncedSearchTerm),
  };
}
