import type { CheckoutTotals } from "@/app/(pages)/checkout/types/checkout.types";
import type { CartItem, CartTotals } from "@/app/shared/cart/types/cart.types";

export type CheckoutSummaryProps = {
  items: CartItem[];
  cartTotals: CartTotals;
  totals: CheckoutTotals;
  carrierLabel: string;
  /** What still blocks the order, shown once the visitor has tried to place it. */
  hint: string | null;
  isPlacing: boolean;
  onPlace: () => void;
  onEdit: () => void;
};
