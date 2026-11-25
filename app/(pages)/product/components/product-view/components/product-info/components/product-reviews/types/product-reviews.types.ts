import type { ProductReviewsResponse } from "@/app/(pages)/product/types/product-review.types";
import type { ProductDetails, ProductOffer } from "@/app/shared/products/types/products.types";

export type ProductReviewsProps = {
  product: ProductDetails;
  /** The selected variation: its photo and label head the review form. */
  offer: ProductOffer;
  /** First page, read on the server with the product. */
  initialReviews: ProductReviewsResponse;
};

/** The card shows one of these at a time: the reviews, the new review form, or its thank-you. */
export type ProductReviewsView = "list" | "form" | "success";
