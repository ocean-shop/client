import { getCheckoutCarrierHelper } from "@/app/(pages)/checkout/helpers/get-checkout-carrier";
import type { DeliveryCarrier } from "@/app/shared/delivery/types/delivery.types";
import { CheckoutSection } from "../checkout-section/checkout-section";
import { DeliveryCarriers } from "./components/delivery-carriers/delivery-carriers";
import { DeliveryCitySelect } from "./components/delivery-city-select/delivery-city-select";
import { DeliveryCourierFields } from "./components/delivery-courier-fields/delivery-courier-fields";
import { DeliveryMethods } from "./components/delivery-methods/delivery-methods";
import { DeliveryPoints } from "./components/delivery-points/delivery-points";
import {
  CHECKOUT_DELIVERY_STEP,
  CHECKOUT_DELIVERY_TITLE,
} from "./constants/checkout-delivery.constants";
import type {
  CheckoutDeliveryProps,
  CheckoutDeliveryRouteChange,
} from "./types/checkout-delivery.types";

export const CheckoutDelivery = ({ delivery, onChange }: CheckoutDeliveryProps) => {
  const carrier = getCheckoutCarrierHelper(delivery.carrier);

  // A chosen branch belongs to one city, carrier and method, so changing any of them clears it.
  const handleRouteChange = (route: CheckoutDeliveryRouteChange) => {
    onChange({ ...delivery, ...route, point: null, manualPoint: null });
  };

  const handleCarrierChange = (carrierId: DeliveryCarrier) => {
    const nextCarrier = getCheckoutCarrierHelper(carrierId);
    const hasMethod = nextCarrier.methods.some((method) => method.id === delivery.method);

    handleRouteChange({
      carrier: carrierId,
      method: hasMethod ? delivery.method : nextCarrier.methods[0].id,
    });
  };

  return (
    <CheckoutSection step={CHECKOUT_DELIVERY_STEP} title={CHECKOUT_DELIVERY_TITLE}>
      <DeliveryCitySelect city={delivery.city} onChange={(city) => handleRouteChange({ city })} />
      <DeliveryCarriers selectedCarrier={delivery.carrier} onChange={handleCarrierChange} />
      <DeliveryMethods
        methods={carrier.methods}
        selectedMethod={delivery.method}
        onChange={(method) => handleRouteChange({ method })}
      />

      {delivery.method === "courier" ? (
        <DeliveryCourierFields
          street={delivery.street}
          apartment={delivery.apartment}
          onStreetChange={(street) => onChange({ ...delivery, street })}
          onApartmentChange={(apartment) => onChange({ ...delivery, apartment })}
        />
      ) : (
        <DeliveryPoints
          // Remounting drops the search typed for the previous city, carrier or method.
          key={`${delivery.carrier}-${delivery.method}-${delivery.city.id}`}
          carrier={delivery.carrier}
          method={delivery.method}
          city={delivery.city}
          selectedPoint={delivery.point}
          onSelect={(point) => onChange({ ...delivery, point, manualPoint: null })}
          manualPoint={delivery.manualPoint}
          onManualPointChange={(manualPoint) => onChange({ ...delivery, manualPoint })}
        />
      )}
    </CheckoutSection>
  );
};
