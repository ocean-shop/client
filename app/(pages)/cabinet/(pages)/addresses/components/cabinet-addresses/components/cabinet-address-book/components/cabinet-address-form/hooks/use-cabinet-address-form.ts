"use client";

import { useState } from "react";
import { CHECKOUT_DEFAULT_DELIVERY } from "@/app/(pages)/checkout/constants/checkout.constants";
import type { CheckoutDelivery } from "@/app/(pages)/checkout/types/checkout.types";
import type {
  DeliveryCity,
  DeliveryManualPoint,
  DeliveryPoint,
} from "@/app/shared/delivery/types/delivery.types";
import { runCabinetActionHelper } from "../../../../../../../../../helpers/run-cabinet-action";
import { createUserShippingAction } from "../../../../../../../actions/create-user-shipping";
import { CABINET_ADDRESS_FORM_SAVE_ERROR_TOAST_TITLE } from "../constants/cabinet-address-form.constants";
import { buildCabinetAddressRequestHelper } from "../helpers/build-cabinet-address-request";
import { validateCabinetAddressFormHelper } from "../helpers/validate-cabinet-address-form";
import type {
  CabinetAddressFormErrors,
  CabinetAddressType,
} from "../types/cabinet-address-form.types";

/** The delivery being filled in, its validation and saving it as a new address. */
export const useCabinetAddressForm = (onSaved: () => void) => {
  const [delivery, setDelivery] = useState<CheckoutDelivery>(CHECKOUT_DEFAULT_DELIVERY);
  const [isMain, setIsMain] = useState(false);
  const [errors, setErrors] = useState<CabinetAddressFormErrors>({});
  const [isSaving, setIsSaving] = useState(false);

  // A chosen branch belongs to one city, carrier and method, so changing any of them clears it.
  const handleTypeChange = ({ carrier, method }: CabinetAddressType) => {
    setDelivery((current) => ({ ...current, carrier, method, point: null, manualPoint: null }));
    setErrors({});
  };

  const handleCityChange = (city: DeliveryCity) => {
    setDelivery((current) => ({ ...current, city, point: null, manualPoint: null }));
  };

  const handlePointChange = (point: DeliveryPoint) => {
    setDelivery((current) => ({ ...current, point, manualPoint: null }));
    setErrors((current) => ({ ...current, point: null }));
  };

  const handleManualPointChange = (manualPoint: DeliveryManualPoint) => {
    setDelivery((current) => ({ ...current, manualPoint }));
    setErrors((current) => ({ ...current, point: null }));
  };

  const handleStreetChange = (street: string) => {
    setDelivery((current) => ({ ...current, street }));
    setErrors((current) => ({ ...current, street: null }));
  };

  const handleApartmentChange = (apartment: string) => {
    setDelivery((current) => ({ ...current, apartment }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSaving) return;

    const nextErrors = validateCabinetAddressFormHelper(delivery);

    if (nextErrors) {
      setErrors(nextErrors);
      return;
    }

    setIsSaving(true);

    const isSaved = await runCabinetActionHelper(
      () => createUserShippingAction(buildCabinetAddressRequestHelper(delivery, isMain)),
      CABINET_ADDRESS_FORM_SAVE_ERROR_TOAST_TITLE
    );

    setIsSaving(false);

    if (isSaved) onSaved();
  };

  return {
    delivery,
    isMain,
    setIsMain,
    errors,
    isSaving,
    handleTypeChange,
    handleCityChange,
    handlePointChange,
    handleManualPointChange,
    handleStreetChange,
    handleApartmentChange,
    handleSubmit,
  };
};
