import type { DeliveryCarrier, DeliveryMethod } from "@/app/shared/delivery/types/delivery.types";

export type CabinetAddressFormProps = {
  onCancel: () => void;
  onSaved: () => void;
};

/** One carrier-and-method pair, offered as a single choice. */
export type CabinetAddressType = {
  carrier: DeliveryCarrier;
  method: DeliveryMethod;
  icon: string;
  label: string;
  note: string;
};

export type CabinetAddressFormErrors = {
  point?: string | null;
  street?: string | null;
};
