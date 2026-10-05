import { toastStore } from "@/app/core/providers/toast-provider/toast-store";
import { formatProductPriceHelper } from "@/app/shared/products/helpers/format-product-price";
import { Button } from "@/app/ui/button/button";
import {
  CART_MODAL_SUMMARY_CHECKOUT_LABEL,
  CART_MODAL_SUMMARY_CHECKOUT_TOAST_MESSAGE,
  CART_MODAL_SUMMARY_CHECKOUT_TOAST_TITLE,
  CART_MODAL_SUMMARY_CONTINUE_LABEL,
  CART_MODAL_SUMMARY_DELIVERY_LABEL,
  CART_MODAL_SUMMARY_DELIVERY_VALUE,
  CART_MODAL_SUMMARY_DISCOUNT_LABEL,
  CART_MODAL_SUMMARY_ITEMS_LABEL,
  CART_MODAL_SUMMARY_TOTAL_LABEL,
} from "./constants/cart-modal-summary.constants";
import type { CartModalSummaryProps } from "./types/cart-modal-summary.types";

export function CartModalSummary({ totals, onClose }: CartModalSummaryProps) {
  function handleCheckout() {
    toastStore.success(
      CART_MODAL_SUMMARY_CHECKOUT_TOAST_TITLE,
      CART_MODAL_SUMMARY_CHECKOUT_TOAST_MESSAGE
    );
  }

  return (
    <div className="flex flex-col gap-2.5 border-t border-border-soft bg-surface-soft px-4.5 pb-[22px] pt-3.5 lg:gap-3 lg:px-6 lg:pb-6 lg:pt-[18px]">
      <div className="flex justify-between text-sm text-muted">
        <span>{CART_MODAL_SUMMARY_ITEMS_LABEL(totals.quantity)}</span>
        <span>{formatProductPriceHelper(totals.subtotal)}</span>
      </div>

      <div className="flex justify-between text-sm font-medium text-accent">
        <span>{CART_MODAL_SUMMARY_DISCOUNT_LABEL}</span>
        <span>
          {totals.discount > 0 && "−"}
          {formatProductPriceHelper(totals.discount)}
        </span>
      </div>

      <div className="flex justify-between text-sm text-muted">
        <span>{CART_MODAL_SUMMARY_DELIVERY_LABEL}</span>
        <span>{CART_MODAL_SUMMARY_DELIVERY_VALUE}</span>
      </div>

      <div className="flex items-baseline justify-between border-t border-border-soft pt-1 lg:pt-1.5">
        <span className="pt-2 text-[15px] font-semibold text-foreground lg:pt-2.5">
          {CART_MODAL_SUMMARY_TOTAL_LABEL}
        </span>
        <span className="font-heading text-xl font-semibold text-foreground lg:text-[22px]">
          {formatProductPriceHelper(totals.total)}
        </span>
      </div>

      <div className="flex flex-col-reverse gap-2.5 lg:flex-row">
        <Button
          variant="outline"
          size="auto"
          onClick={onClose}
          className="h-11 rounded-xl px-5 text-[14.5px] lg:h-[52px] lg:flex-none"
        >
          {CART_MODAL_SUMMARY_CONTINUE_LABEL}
        </Button>

        <Button
          size="auto"
          onClick={handleCheckout}
          disabled={totals.quantity === 0}
          className="h-[52px] rounded-xl text-[15px] lg:flex-1"
        >
          {CART_MODAL_SUMMARY_CHECKOUT_LABEL}
          <span className="font-symbols text-[19px]">arrow_forward</span>
        </Button>
      </div>
    </div>
  );
}
