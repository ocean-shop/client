import type { DeliveryPoint } from "@/app/shared/delivery/types/delivery.types";

export type DeliveryPointsListProps = {
  label: string;
  points: DeliveryPoint[];
  selectedPointId?: string;
  /** The list is on its way out, so nothing can be picked from it in the meantime. */
  isStale: boolean;
  onSelect: (point: DeliveryPoint) => void;
};
