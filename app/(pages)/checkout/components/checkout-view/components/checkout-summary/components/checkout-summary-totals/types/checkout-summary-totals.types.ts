import type { CheckoutTotals } from "@/app/(pages)/checkout/types/checkout.types";
import type { CartTotals } from "@/app/shared/cart/types/cart.types";

export type CheckoutSummaryTotalsProps = {
  cartTotals: CartTotals;
  totals: CheckoutTotals;
  carrierLabel: string;
};
