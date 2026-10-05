import type {
  DeliveryCarrier,
  DeliveryCity,
  DeliveryPoint,
  DeliveryPointMethod,
} from "@/app/shared/delivery/types/delivery.types";

export type DeliveryPointsProps = {
  carrier: DeliveryCarrier;
  method: DeliveryPointMethod;
  city: DeliveryCity;
  selectedPoint: DeliveryPoint | null;
  onSelect: (point: DeliveryPoint) => void;
};
