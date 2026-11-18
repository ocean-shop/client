import { isDeliveryCarrierEnabledHelper } from "@/app/shared/delivery/helpers/is-delivery-carrier-enabled";
import type { ShopFeatures } from "@/app/shared/shop-settings/types/shop-settings.types";
import { ORDERS_AUTOMATIC_PAYMENT_METHOD } from "../constants/orders.constants";
import type { CreateOrderInput } from "../types/orders.types";

/**
 * Whether the shop still offers the order's payment and carrier. The checkout only shows enabled
 * options, but the action's input can be crafted, and the backend does not check the flags.
 */
export const isOrderInputEnabledHelper = (
  { paymentMethod, shippingMethod }: CreateOrderInput,
  features: ShopFeatures
): boolean => {
  return (
    (paymentMethod !== ORDERS_AUTOMATIC_PAYMENT_METHOD || features.isAutomaticPaymentEnabled) &&
    isDeliveryCarrierEnabledHelper(shippingMethod, features)
  );
};
