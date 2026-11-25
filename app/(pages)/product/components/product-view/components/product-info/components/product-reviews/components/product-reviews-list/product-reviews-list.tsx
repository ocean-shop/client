import { Button } from "@/app/ui/button/button";
import { ProductReviewCard } from "./components/product-review-card/product-review-card";
import { ProductReviewsCta } from "./components/product-reviews-cta/product-reviews-cta";
import {
  PRODUCT_REVIEWS_EMPTY_TEXT,
  PRODUCT_REVIEWS_LIST_LABEL,
  PRODUCT_REVIEWS_LIST_SCROLL_CLASS_NAME,
  PRODUCT_REVIEWS_MORE_BUTTON_CLASS_NAME,
} from "./constants/product-reviews-list.constants";
import { formatProductReviewsMoreLabelHelper } from "./helpers/format-product-reviews-more-label";
import { useProductReviews } from "./hooks/use-product-reviews";
import type { ProductReviewsListProps } from "./types/product-reviews-list.types";

export const ProductReviewsList = ({
  productId,
  initialReviews,
  isOpeningForm,
  onWriteReview,
}: ProductReviewsListProps) => {
  const { reviews, remainingCount, hasNextPage, isFetchingNextPage, loadMore } = useProductReviews(
    productId,
    initialReviews
  );

  return (
    <div className="flex flex-col gap-4 lg:gap-[18px]">
      <ProductReviewsCta isPending={isOpeningForm} onWriteReview={onWriteReview} />

      {reviews.length > 0 ? (
        // Focusable so the desktop list, which scrolls on its own, can be scrolled from the keyboard.
        <div
          role="region"
          aria-label={PRODUCT_REVIEWS_LIST_LABEL}
          tabIndex={0}
          className={PRODUCT_REVIEWS_LIST_SCROLL_CLASS_NAME}
        >
          <ul className="flex flex-col">
            {reviews.map((review) => (
              <ProductReviewCard key={review.id} review={review} />
            ))}
          </ul>
        </div>
      ) : (
        <p className="text-sm text-muted-light">{PRODUCT_REVIEWS_EMPTY_TEXT}</p>
      )}

      {hasNextPage && remainingCount > 0 && (
        <Button
          variant="outline"
          size="auto"
          onClick={loadMore}
          disabled={isFetchingNextPage}
          className={PRODUCT_REVIEWS_MORE_BUTTON_CLASS_NAME}
        >
          {formatProductReviewsMoreLabelHelper(remainingCount)}
        </Button>
      )}
    </div>
  );
};
