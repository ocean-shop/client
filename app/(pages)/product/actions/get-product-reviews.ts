"use server";

import { API_DEFAULT_REVALIDATE_SECONDS } from "@/app/core/api/constants/api.constants";
import { PRODUCT_ID_PATTERN } from "@/app/shared/products/constants/products.constants";
import { PRODUCT_REVIEWS_API_URL } from "../constants/product-review-api.constants";
import {
  PRODUCT_REVIEWS_FIRST_PAGE,
  PRODUCT_REVIEWS_INVALID_FAILURE,
  PRODUCT_REVIEWS_UNAVAILABLE_FAILURE,
} from "../constants/product-review.constants";
import type { ProductReviewsResponse, ProductReviewsResult } from "../types/product-review.types";

/**
 * A further page of a product's approved reviews, for "show more". Shares the page's cache
 * lifetime; never throws — failures come back as `{ ok: false }`.
 */
export const getProductReviewsAction = async (
  productId: string,
  page: number
): Promise<ProductReviewsResult> => {
  if (
    typeof productId !== "string" ||
    !PRODUCT_ID_PATTERN.test(productId) ||
    !Number.isSafeInteger(page) ||
    page < PRODUCT_REVIEWS_FIRST_PAGE
  ) {
    return PRODUCT_REVIEWS_INVALID_FAILURE;
  }

  try {
    const response = await fetch(PRODUCT_REVIEWS_API_URL(productId, page), {
      next: { revalidate: API_DEFAULT_REVALIDATE_SECONDS },
    });

    if (!response.ok) return { ok: false, status: response.status };

    return { ok: true, reviews: (await response.json()) as ProductReviewsResponse };
  } catch {
    return PRODUCT_REVIEWS_UNAVAILABLE_FAILURE;
  }
};
