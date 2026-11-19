import type { ShopFeatures } from "@/app/shared/shop-settings/types/shop-settings.types";
import { CHECKOUT_PAYMENTS, CHECKOUT_WALLET_PAYMENT } from "../constants/checkout.constants";
import type { CheckoutPaymentOption } from "../types/checkout.types";

/**
 * Payments offered for new orders, default first; never empty, since manual transfer and cash on
 * delivery are always on. Past orders keep their payment's label from the full list.
 */
export const getCheckoutAvailablePaymentsHelper = (
  features: ShopFeatures
): CheckoutPaymentOption[] => {
  return CHECKOUT_PAYMENTS.filter(
    ({ id }) => features.isAutomaticPaymentEnabled || id !== CHECKOUT_WALLET_PAYMENT
  );
};
