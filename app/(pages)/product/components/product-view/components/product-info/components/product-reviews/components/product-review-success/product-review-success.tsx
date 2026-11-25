import { Button } from "@/app/ui/button/button";
import { MaterialIcon } from "@/app/ui/material-icon/material-icon";
import {
  PRODUCT_REVIEW_SUCCESS_ANOTHER_LABEL,
  PRODUCT_REVIEW_SUCCESS_BUTTON_CLASS_NAME,
  PRODUCT_REVIEW_SUCCESS_ICON,
  PRODUCT_REVIEW_SUCCESS_ICON_CLASS_NAME,
  PRODUCT_REVIEW_SUCCESS_REVIEWS_LABEL,
  PRODUCT_REVIEW_SUCCESS_TEXT,
  PRODUCT_REVIEW_SUCCESS_TITLE,
} from "./constants/product-review-success.constants";
import type { ProductReviewSuccessProps } from "./types/product-review-success.types";

/** Shown in place of the form once the review is sent, until it passes moderation. */
export const ProductReviewSuccess = ({
  onShowReviews,
  onWriteAnother,
}: ProductReviewSuccessProps) => {
  return (
    <div
      role="status"
      className="flex flex-col items-center gap-2.5 px-1 pb-2 pt-[22px] text-center lg:gap-3 lg:px-3 lg:pb-3 lg:pt-7"
    >
      <MaterialIcon
        name={PRODUCT_REVIEW_SUCCESS_ICON}
        className={PRODUCT_REVIEW_SUCCESS_ICON_CLASS_NAME}
      />
      <span className="text-base font-semibold text-foreground lg:text-[17px]">
        {PRODUCT_REVIEW_SUCCESS_TITLE}
      </span>
      <span className="max-w-[360px] text-[13.5px] leading-[1.55] text-muted lg:text-sm">
        {PRODUCT_REVIEW_SUCCESS_TEXT}
      </span>

      <div className="flex w-full flex-col gap-2.5 pt-1.5 lg:w-auto lg:flex-row">
        <Button
          size="auto"
          onClick={onShowReviews}
          className={PRODUCT_REVIEW_SUCCESS_BUTTON_CLASS_NAME}
        >
          {PRODUCT_REVIEW_SUCCESS_REVIEWS_LABEL}
        </Button>
        <Button
          variant="outline"
          size="auto"
          onClick={onWriteAnother}
          className={PRODUCT_REVIEW_SUCCESS_BUTTON_CLASS_NAME}
        >
          {PRODUCT_REVIEW_SUCCESS_ANOTHER_LABEL}
        </Button>
      </div>
    </div>
  );
};
