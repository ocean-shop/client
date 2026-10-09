import type { DeliveryCity } from "@/app/shared/delivery/types/delivery.types";

export type DeliveryCitySelectProps = {
  city: DeliveryCity;
  onChange: (city: DeliveryCity) => void;
};
