import { CHECKOUT_CARRIERS } from "@/app/(pages)/checkout/constants/checkout.constants";
import { getCheckoutCarrierHelper } from "@/app/(pages)/checkout/helpers/get-checkout-carrier";
import { formatProductPriceHelper } from "@/app/shared/products/helpers/format-product-price";
import type {
  DeliveryCarrier,
  DeliveryCity,
  DeliveryMethod,
} from "@/app/shared/delivery/types/delivery.types";
import { CheckoutField } from "../checkout-field/checkout-field";
import { CheckoutOption } from "../checkout-option/checkout-option";
import { CheckoutSection } from "../checkout-section/checkout-section";
import { DeliveryCitySelect } from "./components/delivery-city-select/delivery-city-select";
import { DeliveryPoints } from "./components/delivery-points/delivery-points";
import {
  CHECKOUT_DELIVERY_CARRIERS_LABEL,
  CHECKOUT_DELIVERY_COURIER_FIELDS,
  CHECKOUT_DELIVERY_METHODS_LABEL,
  CHECKOUT_DELIVERY_METHOD_STATE_CLASS_NAMES,
  CHECKOUT_DELIVERY_STEP,
  CHECKOUT_DELIVERY_TITLE,
} from "./constants/checkout-delivery.constants";
import type { CheckoutDeliveryProps } from "./types/checkout-delivery.types";

export function CheckoutDelivery({ delivery, onChange }: CheckoutDeliveryProps) {
  const carrier = getCheckoutCarrierHelper(delivery.carrier);

  // A chosen branch belongs to one city, carrier and method, so changing any of them clears it.
  function handleCityChange(city: DeliveryCity) {
    onChange({ ...delivery, city, point: null });
  }

  function handleCarrierChange(carrierId: DeliveryCarrier) {
    const nextCarrier = getCheckoutCarrierHelper(carrierId);
    const hasMethod = nextCarrier.methods.some((method) => method.id === delivery.method);

    onChange({
      ...delivery,
      carrier: carrierId,
      method: hasMethod ? delivery.method : nextCarrier.methods[0].id,
      point: null,
    });
  }

  function handleMethodChange(method: DeliveryMethod) {
    onChange({ ...delivery, method, point: null });
  }

  return (
    <CheckoutSection step={CHECKOUT_DELIVERY_STEP} title={CHECKOUT_DELIVERY_TITLE}>
      <DeliveryCitySelect city={delivery.city} onChange={handleCityChange} />

      <div
        role="radiogroup"
        aria-label={CHECKOUT_DELIVERY_CARRIERS_LABEL}
        className="grid grid-cols-2 gap-3"
      >
        {CHECKOUT_CARRIERS.map((option) => (
          <CheckoutOption
            key={option.id}
            isSelected={option.id === delivery.carrier}
            onSelect={() => handleCarrierChange(option.id)}
            className="items-start p-3.5"
          >
            <span className="flex flex-col gap-[3px]">
              <span className="text-[14.5px] font-semibold">{option.label}</span>
              <span className="text-[12.5px] text-muted-light">{option.note}</span>
            </span>
          </CheckoutOption>
        ))}
      </div>

      <div
        role="radiogroup"
        aria-label={CHECKOUT_DELIVERY_METHODS_LABEL}
        className="flex flex-wrap gap-2"
      >
        {carrier.methods.map((method) => {
          const isSelected = method.id === delivery.method;

          return (
            <button
              key={method.id}
              type="button"
              role="radio"
              aria-checked={isSelected}
              onClick={() => handleMethodChange(method.id)}
              className={`flex h-[42px] items-center gap-2 rounded-[10px] border-[1.5px] px-3.5 text-sm font-semibold text-foreground transition-colors ${
                CHECKOUT_DELIVERY_METHOD_STATE_CLASS_NAMES[isSelected ? "selected" : "idle"]
              }`}
            >
              <span className="font-symbols text-[19px] text-accent">{method.icon}</span>
              {method.label}
              <span className="font-normal text-muted-light">
                {formatProductPriceHelper(method.price)}
              </span>
            </button>
          );
        })}
      </div>

      {delivery.method === "courier" ? (
        <div className="grid gap-3.5 lg:grid-cols-[2fr_1fr]">
          <CheckoutField
            {...CHECKOUT_DELIVERY_COURIER_FIELDS.street}
            value={delivery.street}
            onChange={(event) => onChange({ ...delivery, street: event.target.value })}
          />
          <CheckoutField
            {...CHECKOUT_DELIVERY_COURIER_FIELDS.apartment}
            value={delivery.apartment}
            onChange={(event) => onChange({ ...delivery, apartment: event.target.value })}
          />
        </div>
      ) : (
        <DeliveryPoints
          // Remounting drops the search typed for the previous city, carrier or method.
          key={`${delivery.carrier}-${delivery.method}-${delivery.city.id}`}
          carrier={delivery.carrier}
          method={delivery.method}
          city={delivery.city}
          selectedPoint={delivery.point}
          onSelect={(point) => onChange({ ...delivery, point })}
        />
      )}
    </CheckoutSection>
  );
}
