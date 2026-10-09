"use client";

import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useDebouncedValue } from "@/app/core/hooks/use-debounced-value";
import { getDeliveryPointsAction } from "@/app/shared/delivery/actions/get-delivery-points";
import type { DeliveryPointsRequest } from "@/app/shared/delivery/types/delivery.types";
import {
  DELIVERY_POINTS_DEBOUNCE_MS,
  DELIVERY_POINTS_QUERY_KEY,
  DELIVERY_POINTS_STALE_TIME_MS,
} from "../constants/delivery-points.constants";

/**
 * Pick-up points for the chosen carrier, method and city. The previous list stays on screen
 * while the next one loads, but is flagged so it cannot be picked from in the meantime.
 */
export function useDeliveryPoints({ carrier, method, city, searchTerm }: DeliveryPointsRequest) {
  const term = searchTerm.trim();
  const debouncedTerm = useDebouncedValue(term, DELIVERY_POINTS_DEBOUNCE_MS);

  const { data, isPending, isError, isPlaceholderData } = useQuery({
    queryKey: [DELIVERY_POINTS_QUERY_KEY, carrier, method, city.id, debouncedTerm],
    queryFn: () => getDeliveryPointsAction({ carrier, method, city, searchTerm: debouncedTerm }),
    placeholderData: keepPreviousData,
    staleTime: DELIVERY_POINTS_STALE_TIME_MS,
    // The carrier call already retries a throttled request, so one more attempt is enough.
    retry: 1,
  });

  return {
    points: data,
    isLoading: isPending,
    isError,
    isStale: isPlaceholderData || term !== debouncedTerm,
  };
}
