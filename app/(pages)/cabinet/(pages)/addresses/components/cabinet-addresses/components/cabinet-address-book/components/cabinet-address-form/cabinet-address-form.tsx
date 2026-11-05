"use client";

import { Checkbox } from "@/app/ui/checkbox/checkbox";
import { FormActions } from "@/app/ui/form-actions/form-actions";
import { CabinetAddressDeliveryFields } from "./components/cabinet-address-delivery-fields/cabinet-address-delivery-fields";
import { CabinetAddressTypePicker } from "./components/cabinet-address-type-picker/cabinet-address-type-picker";
import {
  CABINET_ADDRESS_FORM_CANCEL_LABEL,
  CABINET_ADDRESS_FORM_MAIN_LABEL,
  CABINET_ADDRESS_FORM_SAVE_LABEL,
} from "./constants/cabinet-address-form.constants";
import { useCabinetAddressForm } from "./hooks/use-cabinet-address-form";
import type { CabinetAddressFormProps } from "./types/cabinet-address-form.types";

/**
 * A new delivery address, picked the same way as at checkout: the city and the branch or parcel
 * locker come straight from the carrier, a courier address is typed in. The very first address is
 * always main, so the checkbox only shows once there is another one to replace.
 */
export const CabinetAddressForm = ({
  canChooseMain,
  onCancel,
  onSaved,
}: CabinetAddressFormProps) => {
  const {
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
  } = useCabinetAddressForm(onSaved);

  return (
    <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-[18px]">
      <CabinetAddressTypePicker
        carrier={delivery.carrier}
        method={delivery.method}
        onChange={handleTypeChange}
        disabled={isSaving}
      />

      <CabinetAddressDeliveryFields
        delivery={delivery}
        errors={errors}
        onCityChange={handleCityChange}
        onPointChange={handlePointChange}
        onManualPointChange={handleManualPointChange}
        onStreetChange={handleStreetChange}
        onApartmentChange={handleApartmentChange}
      />

      {canChooseMain && (
        <Checkbox
          checked={isMain}
          onChange={setIsMain}
          disabled={isSaving}
          label={CABINET_ADDRESS_FORM_MAIN_LABEL}
        />
      )}

      <FormActions
        cancelLabel={CABINET_ADDRESS_FORM_CANCEL_LABEL}
        confirmLabel={CABINET_ADDRESS_FORM_SAVE_LABEL}
        onCancel={onCancel}
        disabled={isSaving}
      />
    </form>
  );
};
