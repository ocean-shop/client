import type { ShopFeatures } from "@/app/shared/shop-settings/types/shop-settings.types";
import type { DeliveryPaymentMethod } from "../components/delivery-payments/types/delivery-payments.types";
import {
  DELIVERY_PAYMENT_METHODS,
  DELIVERY_WALLET_PAYMENT_METHOD,
} from "../constants/delivery.constants";

/** The payment methods to describe, leaving out Apple Pay / Google Pay while they are off. */
export const getDeliveryPaymentMethodsHelper = (
  features: ShopFeatures
): DeliveryPaymentMethod[] => {
  return DELIVERY_PAYMENT_METHODS.filter(
    (method) => features.isAutomaticPaymentEnabled || method !== DELIVERY_WALLET_PAYMENT_METHOD
  );
};
