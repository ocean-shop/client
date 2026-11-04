import { DeliveryCitySelect } from "@/app/(pages)/checkout/components/checkout-view/components/checkout-delivery/components/delivery-city-select/delivery-city-select";
import { DeliveryPoints } from "@/app/(pages)/checkout/components/checkout-view/components/checkout-delivery/components/delivery-points/delivery-points";
import { FormInput } from "@/app/ui/form-input/form-input";
import {
  CABINET_ADDRESS_DELIVERY_FIELDS_COURIER,
  CABINET_ADDRESS_DELIVERY_FIELDS_STREET_MAX_LENGTH,
} from "./constants/cabinet-address-delivery-fields.constants";
import type { CabinetAddressDeliveryFieldsProps } from "./types/cabinet-address-delivery-fields.types";

/** The city, then a street for a courier or a branch and parcel locker for everything else. */
export const CabinetAddressDeliveryFields = ({
  delivery,
  errors,
  onCityChange,
  onPointChange,
  onManualPointChange,
  onStreetChange,
  onApartmentChange,
}: CabinetAddressDeliveryFieldsProps) => {
  const isCourier = delivery.method === "courier";

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <div className={isCourier ? "min-w-0" : "min-w-0 lg:col-span-2"}>
        <DeliveryCitySelect city={delivery.city} onChange={onCityChange} />
      </div>

      {delivery.method === "courier" ? (
        <>
          <FormInput
            {...CABINET_ADDRESS_DELIVERY_FIELDS_COURIER.street}
            value={delivery.street}
            error={errors.street}
            maxLength={CABINET_ADDRESS_DELIVERY_FIELDS_STREET_MAX_LENGTH}
            onChange={(event) => onStreetChange(event.target.value)}
          />
          <FormInput
            {...CABINET_ADDRESS_DELIVERY_FIELDS_COURIER.apartment}
            value={delivery.apartment}
            maxLength={CABINET_ADDRESS_DELIVERY_FIELDS_STREET_MAX_LENGTH}
            onChange={(event) => onApartmentChange(event.target.value)}
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
            onSelect={onPointChange}
            manualPoint={delivery.manualPoint}
            onManualPointChange={onManualPointChange}
          />
          {errors.point && <span className="text-[12.5px] text-error-dark">{errors.point}</span>}
        </div>
      )}
    </div>
  );
};
