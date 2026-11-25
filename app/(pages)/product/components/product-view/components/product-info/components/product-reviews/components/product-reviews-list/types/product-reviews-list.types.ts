import type { ProductReviewsResponse } from "@/app/(pages)/product/types/product-review.types";

export type ProductReviewsListProps = {
  productId: string;
  initialReviews: ProductReviewsResponse;
  /** True while the session is checked before the form opens. */
  isOpeningForm: boolean;
  onWriteReview: () => void;
};
