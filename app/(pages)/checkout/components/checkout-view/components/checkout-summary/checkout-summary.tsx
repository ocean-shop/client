import { formatProductPriceHelper } from "@/app/shared/products/helpers/format-product-price";
import { Button } from "@/app/ui/button/button";
import { CheckoutSummaryItem } from "./components/checkout-summary-item/checkout-summary-item";
import {
  CHECKOUT_SUMMARY_COD_LABEL,
  CHECKOUT_SUMMARY_DELIVERY_LABEL,
  CHECKOUT_SUMMARY_DISCOUNT_LABEL,
  CHECKOUT_SUMMARY_EDIT_LABEL,
  CHECKOUT_SUMMARY_ITEMS_LABEL,
  CHECKOUT_SUMMARY_PLACE_LABEL,
  CHECKOUT_SUMMARY_TERMS_LABEL,
  CHECKOUT_SUMMARY_TITLE,
  CHECKOUT_SUMMARY_TOTAL_LABEL,
} from "./constants/checkout-summary.constants";
import type { CheckoutSummaryProps } from "./types/checkout-summary.types";

export function CheckoutSummary({
  items,
  cartTotals,
  totals,
  carrierLabel,
  hint,
  onPlace,
  onEdit,
}: CheckoutSummaryProps) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl bg-background p-[18px] lg:p-6">
      <div className="flex items-baseline justify-between">
        <h2 className="font-heading text-base font-semibold tracking-[-.015em] text-foreground lg:text-[17px]">
          {CHECKOUT_SUMMARY_TITLE}
        </h2>
        <Button variant="text" size="auto" onClick={onEdit} className="text-[13.5px]">
          {CHECKOUT_SUMMARY_EDIT_LABEL}
        </Button>
      </div>

      <div className="flex flex-col">
        {items.map((item) => (
          <CheckoutSummaryItem key={item.id} item={item} />
        ))}
      </div>

      <div className="flex flex-col gap-2.5 text-sm text-muted">
        <div className="flex justify-between">
          <span>{CHECKOUT_SUMMARY_ITEMS_LABEL(cartTotals.quantity)}</span>
          <span>{formatProductPriceHelper(cartTotals.subtotal)}</span>
        </div>

        <div className="flex justify-between font-medium text-accent">
          <span>{CHECKOUT_SUMMARY_DISCOUNT_LABEL}</span>
          <span>
            {cartTotals.discount > 0 && "−"}
            {formatProductPriceHelper(cartTotals.discount)}
          </span>
        </div>

        <div className="flex justify-between">
          <span>{CHECKOUT_SUMMARY_DELIVERY_LABEL(carrierLabel)}</span>
          <span>{formatProductPriceHelper(totals.shipping)}</span>
        </div>

        {totals.codFee > 0 && (
          <div className="flex justify-between">
            <span>{CHECKOUT_SUMMARY_COD_LABEL}</span>
            <span>{formatProductPriceHelper(totals.codFee)}</span>
          </div>
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

      {hint && (
        <span role="alert" className="text-[13px] text-error-dark">
          {hint}
        </span>
      )}

      <Button size="auto" onClick={onPlace} className="h-[54px] rounded-xl text-[15.5px]">
        {CHECKOUT_SUMMARY_PLACE_LABEL}
        <span className="font-symbols text-[19px]">arrow_forward</span>
      </Button>

      <span className="text-center text-[12.5px] leading-normal text-muted-light">
        {CHECKOUT_SUMMARY_TERMS_LABEL}
      </span>
    </div>
  );
}
