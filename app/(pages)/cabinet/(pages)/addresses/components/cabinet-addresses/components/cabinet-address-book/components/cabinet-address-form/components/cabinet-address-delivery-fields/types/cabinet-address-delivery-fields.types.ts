import type { CheckoutDelivery } from "@/app/(pages)/checkout/types/checkout.types";
import type {
  DeliveryCity,
  DeliveryManualPoint,
  DeliveryPoint,
} from "@/app/shared/delivery/types/delivery.types";
import type { CabinetAddressFormErrors } from "../../../types/cabinet-address-form.types";

export type CabinetAddressDeliveryFieldsProps = {
  delivery: CheckoutDelivery;
  errors: CabinetAddressFormErrors;
  onCityChange: (city: DeliveryCity) => void;
  onPointChange: (point: DeliveryPoint) => void;
  onManualPointChange: (manualPoint: DeliveryManualPoint) => void;
  onStreetChange: (street: string) => void;
  onApartmentChange: (apartment: string) => void;
};
