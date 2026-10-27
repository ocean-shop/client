import { CheckoutField } from "../../../../../checkout-field/checkout-field";
import {
  DELIVERY_MANUAL_POINT_CITY_FIELD,
  DELIVERY_MANUAL_POINT_CITY_MAX_LENGTH,
  DELIVERY_MANUAL_POINT_NUMBER_FIELDS,
  DELIVERY_MANUAL_POINT_NUMBER_IGNORED_PATTERN,
  DELIVERY_MANUAL_POINT_NUMBER_MAX_LENGTH,
} from "./constants/delivery-manual-point.constants";
import type { DeliveryManualPointProps } from "./types/delivery-manual-point.types";

/**
 * Settlement and branch number typed in by hand. The settlement starts as the city picked above,
 * so only the number is needed when that city is right.
 */
export const DeliveryManualPoint = ({
  method,
  city,
  value,
  onChange,
}: DeliveryManualPointProps) => {
  const cityValue = value?.city ?? city.name;
  const numberValue = value?.number ?? "";

  return (
    <div className="grid gap-3.5 lg:grid-cols-[2fr_1fr]">
      <CheckoutField
        {...DELIVERY_MANUAL_POINT_CITY_FIELD}
        value={cityValue}
        maxLength={DELIVERY_MANUAL_POINT_CITY_MAX_LENGTH}
        onChange={(event) => onChange({ city: event.target.value, number: numberValue })}
      />
      <CheckoutField
        {...DELIVERY_MANUAL_POINT_NUMBER_FIELDS[method]}
        value={numberValue}
        inputMode="numeric"
        maxLength={DELIVERY_MANUAL_POINT_NUMBER_MAX_LENGTH}
        onChange={(event) =>
          onChange({
            city: cityValue,
            number: event.target.value.replace(DELIVERY_MANUAL_POINT_NUMBER_IGNORED_PATTERN, ""),
          })
        }
      />
    </div>
  );
};
