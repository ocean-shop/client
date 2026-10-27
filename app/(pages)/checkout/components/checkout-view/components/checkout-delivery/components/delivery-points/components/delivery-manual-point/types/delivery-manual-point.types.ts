import type {
  DeliveryCity,
  DeliveryManualPoint,
  DeliveryPointMethod,
} from "@/app/shared/delivery/types/delivery.types";

export type DeliveryManualPointProps = {
  method: DeliveryPointMethod;
  /** The city picked above, which the settlement field starts from. */
  city: DeliveryCity;
  value: DeliveryManualPoint | null;
  onChange: (value: DeliveryManualPoint) => void;
};
