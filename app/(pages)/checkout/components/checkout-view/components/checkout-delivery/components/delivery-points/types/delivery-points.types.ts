import type {
  DeliveryCarrier,
  DeliveryCity,
  DeliveryManualPoint,
  DeliveryPoint,
  DeliveryPointMethod,
} from "@/app/shared/delivery/types/delivery.types";

export type DeliveryPointsProps = {
  carrier: DeliveryCarrier;
  method: DeliveryPointMethod;
  city: DeliveryCity;
  selectedPoint: DeliveryPoint | null;
  onSelect: (point: DeliveryPoint) => void;
  /** Offered instead of the list when the carrier's points cannot be loaded. */
  manualPoint: DeliveryManualPoint | null;
  onManualPointChange: (manualPoint: DeliveryManualPoint) => void;
};
