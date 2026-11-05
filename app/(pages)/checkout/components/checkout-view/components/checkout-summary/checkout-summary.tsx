import { Button } from "@/app/ui/button/button";
import { MaterialIcon } from "@/app/ui/material-icon/material-icon";
import { SurfaceCard } from "@/app/ui/surface-card/surface-card";
import { CHECKOUT_SECTION_TITLE_CLASS_NAME } from "../../constants/checkout-view.constants";
import { CheckoutSummaryItem } from "./components/checkout-summary-item/checkout-summary-item";
import { CheckoutSummaryTotals } from "./components/checkout-summary-totals/checkout-summary-totals";
import {
  CHECKOUT_SUMMARY_EDIT_LABEL,
  CHECKOUT_SUMMARY_PLACE_LABEL,
  CHECKOUT_SUMMARY_PLACING_LABEL,
  CHECKOUT_SUMMARY_TERMS_LABEL,
  CHECKOUT_SUMMARY_TITLE,
} from "./constants/checkout-summary.constants";
import type { CheckoutSummaryProps } from "./types/checkout-summary.types";

export const CheckoutSummary = ({
  items,
  cartTotals,
  totals,
  carrierLabel,
  hint,
  isPlacing,
  onPlace,
  onEdit,
}: CheckoutSummaryProps) => {
  return (
    <SurfaceCard className="flex flex-col gap-4">
      <div className="flex items-baseline justify-between">
        <h2 className={CHECKOUT_SECTION_TITLE_CLASS_NAME}>{CHECKOUT_SUMMARY_TITLE}</h2>
        <Button variant="text" size="auto" onClick={onEdit} className="text-[13.5px]">
          {CHECKOUT_SUMMARY_EDIT_LABEL}
        </Button>
      </div>

      <div className="flex flex-col">
        {items.map((item) => (
          <CheckoutSummaryItem key={item.id} item={item} />
        ))}
      </div>

      <CheckoutSummaryTotals cartTotals={cartTotals} totals={totals} carrierLabel={carrierLabel} />

      {hint && (
        <span role="alert" className="text-[13px] text-error-dark">
          {hint}
        </span>
      )}

      <Button
        size="auto"
        onClick={onPlace}
        disabled={isPlacing}
        className="h-[54px] rounded-xl text-[15.5px]"
      >
        {isPlacing ? CHECKOUT_SUMMARY_PLACING_LABEL : CHECKOUT_SUMMARY_PLACE_LABEL}
        {!isPlacing && <MaterialIcon name="arrow_forward" className="text-[19px]" />}
      </Button>

      <span className="text-center text-[12.5px] leading-normal text-muted-light">
        {CHECKOUT_SUMMARY_TERMS_LABEL}
      </span>
    </SurfaceCard>
  );
};
