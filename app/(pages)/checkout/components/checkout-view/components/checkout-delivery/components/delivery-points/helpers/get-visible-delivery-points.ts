import type { DeliveryPoint } from "@/app/shared/delivery/types/delivery.types";

/** A search can hide the chosen point, so it stays pinned on top of the results. */
export const getVisibleDeliveryPointsHelper = (
  points: DeliveryPoint[] | undefined,
  selectedPoint: DeliveryPoint | null
): DeliveryPoint[] => {
  const isSelectedListed = points?.some((point) => point.id === selectedPoint?.id);

  return [...(selectedPoint && !isSelectedListed ? [selectedPoint] : []), ...(points ?? [])];
};
