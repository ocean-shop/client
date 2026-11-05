import type { DeliveryCity } from "@/app/shared/delivery/types/delivery.types";

export type DeliveryCityTriggerProps = {
  city: DeliveryCity;
  isOpen: boolean;
  onToggle: () => void;
};
