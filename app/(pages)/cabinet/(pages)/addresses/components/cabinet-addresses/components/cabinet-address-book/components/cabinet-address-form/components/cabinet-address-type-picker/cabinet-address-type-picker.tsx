import { isDeliveryCarrierEnabledHelper } from "@/app/shared/delivery/helpers/is-delivery-carrier-enabled";
import { useShopFeatures } from "@/app/shared/shop-settings/hooks/use-shop-features";
import { CabinetAddressTypeOption } from "./components/cabinet-address-type-option/cabinet-address-type-option";
import {
  CABINET_ADDRESS_TYPE_PICKER_LABEL,
  CABINET_ADDRESS_TYPE_PICKER_TYPES,
} from "./constants/cabinet-address-type-picker.constants";
import type { CabinetAddressTypePickerProps } from "./types/cabinet-address-type-picker.types";

/** One choice per carrier-and-method pair, leaving out the carriers that are switched off. */
export const CabinetAddressTypePicker = ({
  carrier,
  method,
  onChange,
  disabled,
}: CabinetAddressTypePickerProps) => {
  const features = useShopFeatures();
  const types = CABINET_ADDRESS_TYPE_PICKER_TYPES.filter((option) =>
    isDeliveryCarrierEnabledHelper(option.carrier, features)
  );

  return (
    <div className="flex flex-col gap-2">
      <span className="text-[13px] font-medium text-muted">
        {CABINET_ADDRESS_TYPE_PICKER_LABEL}
      </span>
      <div
        role="radiogroup"
        aria-label={CABINET_ADDRESS_TYPE_PICKER_LABEL}
        className={`grid grid-cols-2 gap-2 ${types.length % 2 ? "lg:grid-cols-3" : "lg:grid-cols-4"}`}
      >
        {types.map((option) => (
          <CabinetAddressTypeOption
            key={`${option.carrier}-${option.method}`}
            option={option}
            isSelected={option.carrier === carrier && option.method === method}
            onSelect={() => onChange(option)}
            disabled={disabled}
          />
        ))}
      </div>
    </div>
  );
};
