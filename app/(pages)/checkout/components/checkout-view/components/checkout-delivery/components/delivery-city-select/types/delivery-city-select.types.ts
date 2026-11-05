import type { DeliveryCity } from "@/app/shared/delivery/types/delivery.types";

export type DeliveryCitySelectProps = {
  city: DeliveryCity;
  onChange: (city: DeliveryCity) => void;
};

export type DeliveryCitySelectStatusState = {
  hasSearchableTerm: boolean;
  isSearching: boolean;
  isError: boolean;
  hasOptions: boolean;
};
