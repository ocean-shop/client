import { FormInput } from "@/app/ui/form-input/form-input";
import { DELIVERY_COURIER_FIELDS } from "./constants/delivery-courier-fields.constants";
import type { DeliveryCourierFieldsProps } from "./types/delivery-courier-fields.types";

export const DeliveryCourierFields = ({
  street,
  apartment,
  onStreetChange,
  onApartmentChange,
}: DeliveryCourierFieldsProps) => {
  return (
    <div className="grid gap-3.5 lg:grid-cols-[2fr_1fr]">
      <FormInput
        {...DELIVERY_COURIER_FIELDS.street}
        value={street}
        onChange={(event) => onStreetChange(event.target.value)}
      />
      <FormInput
        {...DELIVERY_COURIER_FIELDS.apartment}
        value={apartment}
        onChange={(event) => onApartmentChange(event.target.value)}
      />
    </div>
  );
};
