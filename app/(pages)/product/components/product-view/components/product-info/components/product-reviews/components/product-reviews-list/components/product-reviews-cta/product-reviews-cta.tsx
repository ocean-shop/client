import { Button } from "@/app/ui/button/button";
import { MaterialIcon } from "@/app/ui/material-icon/material-icon";
import {
  PRODUCT_REVIEWS_CTA_BUTTON_CLASS_NAME,
  PRODUCT_REVIEWS_CTA_BUTTON_ICON,
  PRODUCT_REVIEWS_CTA_BUTTON_LABEL,
  PRODUCT_REVIEWS_CTA_CLASS_NAME,
  PRODUCT_REVIEWS_CTA_TEXT,
  PRODUCT_REVIEWS_CTA_TITLE,
} from "./constants/product-reviews-cta.constants";
import type { ProductReviewsCtaProps } from "./types/product-reviews-cta.types";

/** "Купували цей товар?" banner above the reviews, opening the new review form. */
export const ProductReviewsCta = ({ isPending, onWriteReview }: ProductReviewsCtaProps) => {
  return (
    <div className={PRODUCT_REVIEWS_CTA_CLASS_NAME}>
      <div className="flex flex-col gap-0.5">
        <span className="text-[13.5px] font-semibold text-foreground lg:text-sm">
          {PRODUCT_REVIEWS_CTA_TITLE}
        </span>
        <span className="text-[12.5px] text-muted lg:text-[13px]">{PRODUCT_REVIEWS_CTA_TEXT}</span>
      </div>

      <Button
        size="auto"
        onClick={onWriteReview}
        disabled={isPending}
        className={PRODUCT_REVIEWS_CTA_BUTTON_CLASS_NAME}
      >
        <MaterialIcon name={PRODUCT_REVIEWS_CTA_BUTTON_ICON} className="text-[19px]" />
        {PRODUCT_REVIEWS_CTA_BUTTON_LABEL}
      </Button>
    </div>
  );
};
