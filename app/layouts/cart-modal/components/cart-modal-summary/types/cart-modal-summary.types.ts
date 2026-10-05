import type { CartTotals } from "@/app/shared/cart/types/cart.types";

export type CartModalSummaryProps = {
  totals: CartTotals;
  onClose: () => void;
};
