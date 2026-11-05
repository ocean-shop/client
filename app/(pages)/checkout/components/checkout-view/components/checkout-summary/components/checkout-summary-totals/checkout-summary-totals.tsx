import { formatProductPriceHelper } from "@/app/shared/products/helpers/format-product-price";
import { CheckoutSummaryRow } from "./components/checkout-summary-row/checkout-summary-row";
import {
  CHECKOUT_SUMMARY_COD_LABEL,
  CHECKOUT_SUMMARY_DELIVERY_LABEL,
  CHECKOUT_SUMMARY_DISCOUNT_LABEL,
  CHECKOUT_SUMMARY_ITEMS_LABEL,
  CHECKOUT_SUMMARY_TOTAL_LABEL,
} from "./constants/checkout-summary-totals.constants";
import type { CheckoutSummaryTotalsProps } from "./types/checkout-summary-totals.types";

export const CheckoutSummaryTotals = ({
  cartTotals,
  totals,
  carrierLabel,
}: CheckoutSummaryTotalsProps) => {
  return (
    <div className="flex flex-col gap-2.5 text-sm text-muted">
      <CheckoutSummaryRow label={CHECKOUT_SUMMARY_ITEMS_LABEL(cartTotals.quantity)}>
        {formatProductPriceHelper(cartTotals.subtotal)}
      </CheckoutSummaryRow>

      <CheckoutSummaryRow
        label={CHECKOUT_SUMMARY_DISCOUNT_LABEL}
        className="font-medium text-accent"
      >
        {cartTotals.discount > 0 && "−"}
        {formatProductPriceHelper(cartTotals.discount)}
      </CheckoutSummaryRow>

      <CheckoutSummaryRow label={CHECKOUT_SUMMARY_DELIVERY_LABEL(carrierLabel)}>
        {formatProductPriceHelper(totals.shipping)}
      </CheckoutSummaryRow>

      {totals.codFee > 0 && (
        <CheckoutSummaryRow label={CHECKOUT_SUMMARY_COD_LABEL}>
          {formatProductPriceHelper(totals.codFee)}
        </CheckoutSummaryRow>
      )}

      <div className="flex items-baseline justify-between border-t border-border-soft pt-3">
        <span className="text-[15px] font-semibold text-foreground">
          {CHECKOUT_SUMMARY_TOTAL_LABEL}
        </span>
        <span className="font-heading text-[22px] font-semibold text-foreground">
          {formatProductPriceHelper(totals.total)}
        </span>
      </div>
    </div>
  );
};
