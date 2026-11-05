import type { DeliveryCity } from "@/app/shared/delivery/types/delivery.types";

export type DeliveryCityMenuProps = {
  searchTerm: string;
  onSearchTermChange: (searchTerm: string) => void;
  /** The line above the options, such as "searching" or "nothing found". */
  status: string | null;
  options: DeliveryCity[];
  selectedCityId: string;
  onSelect: (city: DeliveryCity) => void;
};
