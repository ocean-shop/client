import type { UserShipping } from "@/app/(pages)/cabinet/(pages)/addresses/types/addresses.types";
import { isDeliveryCarrierEnabledHelper } from "@/app/shared/delivery/helpers/is-delivery-carrier-enabled";

/** The main address, or else the first one; addresses of a switched-off carrier are skipped. */
export const getCheckoutPreferredShippingHelper = (
  shippings: UserShipping[]
): UserShipping | undefined => {
  const availableShippings = shippings.filter(({ method }) =>
    isDeliveryCarrierEnabledHelper(method)
  );

  return availableShippings.find(({ isMain }) => isMain) ?? availableShippings[0];
};
