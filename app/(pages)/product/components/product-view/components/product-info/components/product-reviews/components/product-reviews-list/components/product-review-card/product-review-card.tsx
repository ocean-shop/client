import { MaterialIcon } from "@/app/ui/material-icon/material-icon";
import {
  PRODUCT_REVIEW_CARD_ADVANTAGES_LABEL,
  PRODUCT_REVIEW_CARD_AVATAR_CLASS_NAME,
  PRODUCT_REVIEW_CARD_CLASS_NAME,
  PRODUCT_REVIEW_CARD_DATE_FORMATTER,
  PRODUCT_REVIEW_CARD_DETAIL_CLASS_NAME,
  PRODUCT_REVIEW_CARD_DRAWBACKS_LABEL,
  PRODUCT_REVIEW_CARD_HEADER_CLASS_NAME,
  PRODUCT_REVIEW_CARD_RATING_LABEL,
  PRODUCT_REVIEW_CARD_STAR_ICON,
  PRODUCT_REVIEW_CARD_STARS,
  PRODUCT_REVIEW_CARD_VERIFIED_CLASS_NAME,
  PRODUCT_REVIEW_CARD_VERIFIED_ICON,
  PRODUCT_REVIEW_CARD_VERIFIED_LABEL,
} from "./constants/product-review-card.constants";
import { buildProductReviewInitialsHelper } from "./helpers/build-product-review-initials";
import type { ProductReviewCardProps } from "./types/product-review-card.types";

/** One approved review: author, stars and date, the comment, then pros and cons if given. */
export const ProductReviewCard = ({ review }: ProductReviewCardProps) => {
  return (
    <li className={PRODUCT_REVIEW_CARD_CLASS_NAME}>
      <div className={PRODUCT_REVIEW_CARD_HEADER_CLASS_NAME}>
        <span aria-hidden className={PRODUCT_REVIEW_CARD_AVATAR_CLASS_NAME}>
          {buildProductReviewInitialsHelper(review.name)}
        </span>

        <div className="flex min-w-0 flex-col gap-[3px]">
          <span className="truncate text-sm font-semibold text-foreground lg:text-[14.5px]">
            {review.name}
          </span>
          <span className="flex items-center gap-[7px] text-xs text-muted-light lg:gap-2 lg:text-[12.5px]">
            <span
              role="img"
              aria-label={PRODUCT_REVIEW_CARD_RATING_LABEL(review.rating)}
              className="flex gap-px"
            >
              {PRODUCT_REVIEW_CARD_STARS.map((star) => (
                <MaterialIcon
                  key={star}
                  name={PRODUCT_REVIEW_CARD_STAR_ICON}
                  filled={star <= review.rating}
                  className={`text-[13px] lg:text-sm ${
                    star <= review.rating ? "text-accent" : "text-footer-border"
                  }`}
                />
              ))}
            </span>
            <time dateTime={review.createdAt}>
              {PRODUCT_REVIEW_CARD_DATE_FORMATTER.format(new Date(review.createdAt))}
            </time>
          </span>
        </div>

        {review.approvedPurchase && (
          <span className={PRODUCT_REVIEW_CARD_VERIFIED_CLASS_NAME}>
            <MaterialIcon
              name={PRODUCT_REVIEW_CARD_VERIFIED_ICON}
              className="text-[15px] lg:text-base"
            />
            {PRODUCT_REVIEW_CARD_VERIFIED_LABEL}
          </span>
        )}
      </div>

      {/* Reviews are plain text, so their line breaks are kept as typed. */}
      <p className="whitespace-pre-line text-pretty break-words text-[13.5px] leading-[1.55] text-muted lg:text-sm lg:leading-[1.6]">
        {review.comment}
      </p>

      {review.advantages && (
        <p className={PRODUCT_REVIEW_CARD_DETAIL_CLASS_NAME}>
          <b className="font-semibold text-foreground">{PRODUCT_REVIEW_CARD_ADVANTAGES_LABEL}</b>{" "}
          {review.advantages}
        </p>
      )}

      {review.drawbacks && (
        <p className={PRODUCT_REVIEW_CARD_DETAIL_CLASS_NAME}>
          <b className="font-semibold text-foreground">{PRODUCT_REVIEW_CARD_DRAWBACKS_LABEL}</b>{" "}
          {review.drawbacks}
        </p>
      )}
    </li>
  );
};
