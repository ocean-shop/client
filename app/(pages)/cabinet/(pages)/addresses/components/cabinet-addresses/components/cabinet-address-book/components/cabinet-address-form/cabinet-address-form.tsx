"use client";

import { useState } from "react";
import { DeliveryCitySelect } from "@/app/(pages)/checkout/components/checkout-view/components/checkout-delivery/components/delivery-city-select/delivery-city-select";
import { DeliveryPoints } from "@/app/(pages)/checkout/components/checkout-view/components/checkout-delivery/components/delivery-points/delivery-points";
import { CHECKOUT_DEFAULT_DELIVERY } from "@/app/(pages)/checkout/constants/checkout.constants";
import type { CheckoutDelivery } from "@/app/(pages)/checkout/types/checkout.types";
import {
  API_ERROR_MESSAGES,
  DEFAULT_API_ERROR_MESSAGE,
} from "@/app/core/api/constants/api.constants";
import { toastStore } from "@/app/core/providers/toast-provider/toast-store";
import type { DeliveryCity, DeliveryPoint } from "@/app/shared/delivery/types/delivery.types";
import { Button } from "@/app/ui/button/button";
import { createUserShippingAction } from "../../../../../../actions/create-user-shipping";
import { CabinetAddressField } from "./components/cabinet-address-field/cabinet-address-field";
import { CabinetAddressTypeOption } from "./components/cabinet-address-type-option/cabinet-address-type-option";
import {
  CABINET_ADDRESS_FORM_CANCEL_LABEL,
  CABINET_ADDRESS_FORM_COURIER_FIELDS,
  CABINET_ADDRESS_FORM_SAVE_ERROR_TOAST_TITLE,
  CABINET_ADDRESS_FORM_SAVE_LABEL,
  CABINET_ADDRESS_FORM_STREET_MAX_LENGTH,
  CABINET_ADDRESS_FORM_TYPES,
  CABINET_ADDRESS_FORM_TYPES_LABEL,
} from "./constants/cabinet-address-form.constants";
import { buildCabinetAddressRequestHelper } from "./helpers/build-cabinet-address-request";
import { validateCabinetAddressFormHelper } from "./helpers/validate-cabinet-address-form";
import type {
  CabinetAddressFormErrors,
  CabinetAddressFormProps,
  CabinetAddressType,
} from "./types/cabinet-address-form.types";

/**
 * A new delivery address, picked the same way as at checkout: the city and the branch or parcel
 * locker come straight from the carrier, a courier address is typed in.
 */
export function CabinetAddressForm({ onCancel, onSaved }: CabinetAddressFormProps) {
  const [delivery, setDelivery] = useState<CheckoutDelivery>(CHECKOUT_DEFAULT_DELIVERY);
  const [errors, setErrors] = useState<CabinetAddressFormErrors>({});
  const [isSaving, setIsSaving] = useState(false);

  const isCourier = delivery.method === "courier";

  // A chosen branch belongs to one city, carrier and method, so changing any of them clears it.
  function handleTypeChange({ carrier, method }: CabinetAddressType) {
    setDelivery((current) => ({ ...current, carrier, method, point: null }));
    setErrors({});
  }

  function handleCityChange(city: DeliveryCity) {
    setDelivery((current) => ({ ...current, city, point: null }));
  }

  function handlePointChange(point: DeliveryPoint) {
    setDelivery((current) => ({ ...current, point }));
    setErrors((current) => ({ ...current, point: null }));
  }

  function handleStreetChange(street: string) {
    setDelivery((current) => ({ ...current, street }));
    setErrors((current) => ({ ...current, street: null }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSaving) return;

    const nextErrors = validateCabinetAddressFormHelper(delivery);

    if (nextErrors) {
      setErrors(nextErrors);
      return;
    }

    setIsSaving(true);

    try {
      const result = await createUserShippingAction(buildCabinetAddressRequestHelper(delivery));

      if (!result.ok) {
        toastStore.error(
          CABINET_ADDRESS_FORM_SAVE_ERROR_TOAST_TITLE,
          (result.status < 500 && result.message) ||
            (API_ERROR_MESSAGES[result.status] ?? DEFAULT_API_ERROR_MESSAGE)
        );
        return;
      }

      onSaved();
    } catch {
      toastStore.error(CABINET_ADDRESS_FORM_SAVE_ERROR_TOAST_TITLE, DEFAULT_API_ERROR_MESSAGE);
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-[18px]">
      <div className="flex flex-col gap-2">
        <span className="text-[13px] font-medium text-muted">
          {CABINET_ADDRESS_FORM_TYPES_LABEL}
        </span>
        <div
          role="radiogroup"
          aria-label={CABINET_ADDRESS_FORM_TYPES_LABEL}
          className="grid grid-cols-2 gap-2 lg:grid-cols-4"
        >
          {CABINET_ADDRESS_FORM_TYPES.map((option) => (
            <CabinetAddressTypeOption
              key={`${option.carrier}-${option.method}`}
              option={option}
              isSelected={option.carrier === delivery.carrier && option.method === delivery.method}
              onSelect={() => handleTypeChange(option)}
              disabled={isSaving}
            />
          ))}
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className={isCourier ? "min-w-0" : "min-w-0 lg:col-span-2"}>
          <DeliveryCitySelect city={delivery.city} onChange={handleCityChange} />
        </div>

        {delivery.method === "courier" ? (
          <>
            <CabinetAddressField
              {...CABINET_ADDRESS_FORM_COURIER_FIELDS.street}
              value={delivery.street}
              error={errors.street}
              maxLength={CABINET_ADDRESS_FORM_STREET_MAX_LENGTH}
              onChange={(event) => handleStreetChange(event.target.value)}
            />
            <CabinetAddressField
              {...CABINET_ADDRESS_FORM_COURIER_FIELDS.apartment}
              value={delivery.apartment}
              maxLength={CABINET_ADDRESS_FORM_STREET_MAX_LENGTH}
              onChange={(event) =>
                setDelivery((current) => ({ ...current, apartment: event.target.value }))
              }
              className="lg:col-span-2"
            />
          </>
        ) : (
          <div className="flex min-w-0 flex-col gap-1.5 lg:col-span-2">
            <DeliveryPoints
              // Remounting drops the search typed for the previous city, carrier or method.
              key={`${delivery.carrier}-${delivery.method}-${delivery.city.id}`}
              carrier={delivery.carrier}
              method={delivery.method}
              city={delivery.city}
              selectedPoint={delivery.point}
              onSelect={handlePointChange}
            />
            {errors.point && <span className="text-[12.5px] text-error-dark">{errors.point}</span>}
          </div>
        )}
      </div>

      <div className="flex flex-col-reverse gap-2.5 lg:flex-row lg:justify-end">
        <Button
          variant="outline"
          size="auto"
          onClick={onCancel}
          disabled={isSaving}
          className="h-[46px] rounded-[11px] px-5 text-sm"
        >
          {CABINET_ADDRESS_FORM_CANCEL_LABEL}
        </Button>
        <Button
          type="submit"
          size="auto"
          disabled={isSaving}
          className="h-[46px] rounded-[11px] px-6 text-sm"
        >
          {CABINET_ADDRESS_FORM_SAVE_LABEL}
        </Button>
      </div>
    </form>
  );
}
