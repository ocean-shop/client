import type { CartTotals } from "@/app/shared/cart/types/cart.types";
import { CHECKOUT_COD_PAYMENT } from "../constants/checkout.constants";
import type {
  CheckoutDelivery,
  CheckoutPaymentMethod,
  CheckoutTotals,
} from "../types/checkout.types";
import { getCheckoutCarrierHelper } from "./get-checkout-carrier";

export function calculateCheckoutTotalsHelper(
  cartTotals: CartTotals,
  delivery: CheckoutDelivery,
  payment: CheckoutPaymentMethod
): CheckoutTotals {
  const carrier = getCheckoutCarrierHelper(delivery.carrier);
  const shipping = carrier.methods.find((method) => method.id === delivery.method)?.price ?? 0;
  // The carrier takes its cut of everything it collects, delivery included.
  const codFee =
    payment === CHECKOUT_COD_PAYMENT
      ? Math.round(
          carrier.codFee.fixed + ((cartTotals.total + shipping) * carrier.codFee.percent) / 100
        )
      : 0;

  return { shipping, codFee, total: cartTotals.total + shipping + codFee };
}
