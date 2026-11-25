import type { ApiActionFailure, ApiActionMessageFailure } from "@/app/core/api/types/api.types";
import type { ProductReviewField, ProductReviewsResponse } from "../types/product-review.types";

/** Limits of the backend's `CreateProductReviewDto`. */
export const PRODUCT_REVIEW_NAME_MAX_LENGTH = 100;
export const PRODUCT_REVIEW_PROS_CONS_MAX_LENGTH = 2000;
export const PRODUCT_REVIEW_RATING_MIN = 1;
export const PRODUCT_REVIEW_RATING_MAX = 5;

/** The backend accepts up to 5000 characters; the storefront asks for a short, readable review. */
export const PRODUCT_REVIEW_COMMENT_MIN_LENGTH = 20;
export const PRODUCT_REVIEW_COMMENT_MAX_LENGTH = 1000;

/** Reviews per request: the first page renders with the product, the rest load on demand. */
export const PRODUCT_REVIEWS_PAGE_SIZE = 5;
export const PRODUCT_REVIEWS_FIRST_PAGE = 1;

export const PRODUCT_REVIEWS_EMPTY_RESPONSE: ProductReviewsResponse = {
  items: [],
  total: 0,
  page: PRODUCT_REVIEWS_FIRST_PAGE,
  limit: PRODUCT_REVIEWS_PAGE_SIZE,
  totalPages: 0,
};

export const PRODUCT_REVIEW_VALIDATION_MESSAGES: Record<ProductReviewField, string> = {
  rating: "Оберіть оцінку від 1 до 5",
  name: "Вкажіть ім’я",
  advantages: `Не більше ${PRODUCT_REVIEW_PROS_CONS_MAX_LENGTH} символів`,
  drawbacks: `Не більше ${PRODUCT_REVIEW_PROS_CONS_MAX_LENGTH} символів`,
  comment: `Напишіть щонайменше ${PRODUCT_REVIEW_COMMENT_MIN_LENGTH} символів`,
};

export const PRODUCT_REVIEW_UNAUTHORIZED_STATUS = 401;

/** Returned by the review actions when their input fails the checks the form runs. */
export const PRODUCT_REVIEW_INVALID_FAILURE: ApiActionMessageFailure = {
  ok: false,
  status: 400,
  message: "Перевірте оцінку, ім’я та коментар.",
};

/** Returned by the create action for a guest, so the form can send them to sign in. */
export const PRODUCT_REVIEW_UNAUTHORIZED_FAILURE: ApiActionMessageFailure = {
  ok: false,
  status: PRODUCT_REVIEW_UNAUTHORIZED_STATUS,
  message: null,
};

/** Returned by the review actions when the backend cannot be reached at all. */
export const PRODUCT_REVIEW_UNAVAILABLE_FAILURE: ApiActionMessageFailure = {
  ok: false,
  status: 503,
  message: null,
};

export const PRODUCT_REVIEWS_INVALID_FAILURE: ApiActionFailure = { ok: false, status: 400 };
export const PRODUCT_REVIEWS_UNAVAILABLE_FAILURE: ApiActionFailure = { ok: false, status: 503 };
