"use client";

import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useDebouncedValue } from "@/app/core/hooks/use-debounced-value";
import { searchDeliveryCitiesAction } from "@/app/shared/delivery/actions/search-delivery-cities";
import {
  DELIVERY_CITY_SELECT_DEBOUNCE_MS,
  DELIVERY_CITY_SELECT_QUERY_KEY,
  DELIVERY_CITY_SELECT_STALE_TIME_MS,
  DELIVERY_CITY_SELECT_TERM_MIN_LENGTH,
} from "../constants/delivery-city-select.constants";

/** Settlements matching the typed name, fetched once the visitor pauses typing. */
export function useDeliveryCities(searchTerm: string, isEnabled: boolean) {
  const term = searchTerm.trim();
  const debouncedTerm = useDebouncedValue(term, DELIVERY_CITY_SELECT_DEBOUNCE_MS);
  const hasSearchableTerm = debouncedTerm.length >= DELIVERY_CITY_SELECT_TERM_MIN_LENGTH;

  const { data, isFetching } = useQuery({
    queryKey: [DELIVERY_CITY_SELECT_QUERY_KEY, debouncedTerm],
    queryFn: () => searchDeliveryCitiesAction(debouncedTerm),
    placeholderData: keepPreviousData,
    staleTime: DELIVERY_CITY_SELECT_STALE_TIME_MS,
    enabled: isEnabled && hasSearchableTerm,
  });

  return {
    cities: data,
    hasSearchableTerm: term.length >= DELIVERY_CITY_SELECT_TERM_MIN_LENGTH,
    /** True while waiting out the debounce as well, so stale rows never look settled. */
    isSearching: isEnabled && (isFetching || term !== debouncedTerm),
  };
}
