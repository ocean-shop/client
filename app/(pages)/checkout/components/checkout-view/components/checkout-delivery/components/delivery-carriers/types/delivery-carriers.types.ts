import type { DeliveryCarrier } from "@/app/shared/delivery/types/delivery.types";

export type DeliveryCarriersProps = {
  selectedCarrier: DeliveryCarrier;
  onChange: (carrier: DeliveryCarrier) => void;
};
