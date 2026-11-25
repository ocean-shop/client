import { API_DEFAULT_REVALIDATE_SECONDS } from "@/app/core/api/constants/api.constants";
import { fetchApiOrFallback } from "@/app/core/api/fetch-api-or-fallback";
import { PRODUCT_REVIEWS_API_URL } from "../constants/product-review-api.constants";
import {
  PRODUCT_REVIEWS_EMPTY_RESPONSE,
  PRODUCT_REVIEWS_FIRST_PAGE,
} from "../constants/product-review.constants";
import type { ProductReviewsResponse } from "../types/product-review.types";

/**
 * The first page of a product's approved reviews, rendered with the product itself. A failed
 * read leaves the section empty rather than breaking the page.
 */
export const getProductReviews = async (productId: string): Promise<ProductReviewsResponse> => {
  return fetchApiOrFallback(
    PRODUCT_REVIEWS_API_URL(productId, PRODUCT_REVIEWS_FIRST_PAGE),
    { next: { revalidate: API_DEFAULT_REVALIDATE_SECONDS } },
    PRODUCT_REVIEWS_EMPTY_RESPONSE
  );
};
