import type { DeliveryCarrier, DeliveryMethod } from "@/app/shared/delivery/types/delivery.types";
import type { CabinetAddressType } from "../../../types/cabinet-address-form.types";

export type CabinetAddressTypePickerProps = {
  carrier: DeliveryCarrier;
  method: DeliveryMethod;
  onChange: (type: CabinetAddressType) => void;
  disabled?: boolean;
};
