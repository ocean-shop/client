import { formatProductPriceHelper } from "@/app/shared/products/helpers/format-product-price";
import { Button } from "@/app/ui/button/button";
import {
  CABINET_ORDER_SUMMARY_DELIVERY_LABEL,
  CABINET_ORDER_SUMMARY_DISCOUNT_LABEL,
  CABINET_ORDER_SUMMARY_DISCOUNT_PREFIX,
  CABINET_ORDER_SUMMARY_GOODS_LABEL,
  CABINET_ORDER_SUMMARY_REPEAT_LABEL,
  CABINET_ORDER_SUMMARY_TOTAL_LABEL,
} from "./constants/cabinet-order-summary.constants";
import type { CabinetOrderSummaryProps } from "./types/cabinet-order-summary.types";

export const CabinetOrderSummary = ({ order, onRepeat }: CabinetOrderSummaryProps) => {
  const { amounts } = order;

  return (
    <section className="flex flex-col gap-2.5 rounded-2xl bg-background p-[18px] text-sm text-muted lg:p-6">
      <div className="flex justify-between gap-3">
        <span>{CABINET_ORDER_SUMMARY_GOODS_LABEL(order.quantity)}</span>
        <span>{formatProductPriceHelper(amounts.subtotal)}</span>
      </div>
      {amounts.discount > 0 && (
        <div className="flex justify-between gap-3 font-medium text-accent">
          <span>{CABINET_ORDER_SUMMARY_DISCOUNT_LABEL}</span>
          <span>
            {CABINET_ORDER_SUMMARY_DISCOUNT_PREFIX}
            {formatProductPriceHelper(amounts.discount)}
          </span>
        </div>
      )}
      <div className="flex justify-between gap-3">
        <span>{CABINET_ORDER_SUMMARY_DELIVERY_LABEL}</span>
        <span>{formatProductPriceHelper(amounts.delivery)}</span>
      </div>
      <div className="flex items-baseline justify-between gap-3 border-t border-border-soft pt-3">
        <span className="text-[15px] font-semibold text-foreground">
          {CABINET_ORDER_SUMMARY_TOTAL_LABEL}
        </span>
        <span className="font-heading text-xl font-semibold text-foreground lg:text-[22px]">
          {formatProductPriceHelper(amounts.total)}
        </span>
      </div>

      <div className="flex flex-col gap-2.5 pt-2 lg:flex-row lg:flex-wrap">
        <Button
          size="auto"
          onClick={onRepeat}
          className="h-[46px] rounded-[11px] px-[18px] text-sm !gap-[7px]"
        >
          <span className="font-symbols text-lg">replay</span>
          {CABINET_ORDER_SUMMARY_REPEAT_LABEL}
        </Button>
      </div>
    </section>
  );
};
