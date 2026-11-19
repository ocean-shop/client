import { isDeliveryCarrierEnabledHelper } from "@/app/shared/delivery/helpers/is-delivery-carrier-enabled";
import type { ShopFeatures } from "@/app/shared/shop-settings/types/shop-settings.types";
import { CHECKOUT_CARRIERS } from "../constants/checkout.constants";
import type { CheckoutCarrierOption } from "../types/checkout.types";

/** Carriers offered for new orders; past orders keep their carrier's label from the full list. */
export const getCheckoutAvailableCarriersHelper = (
  features: ShopFeatures
): CheckoutCarrierOption[] => {
  return CHECKOUT_CARRIERS.filter(({ id }) => isDeliveryCarrierEnabledHelper(id, features));
};
