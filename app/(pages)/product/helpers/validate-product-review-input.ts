import {
  PRODUCT_REVIEW_COMMENT_MAX_LENGTH,
  PRODUCT_REVIEW_COMMENT_MIN_LENGTH,
  PRODUCT_REVIEW_NAME_MAX_LENGTH,
  PRODUCT_REVIEW_PROS_CONS_MAX_LENGTH,
  PRODUCT_REVIEW_RATING_MAX,
  PRODUCT_REVIEW_RATING_MIN,
  PRODUCT_REVIEW_VALIDATION_MESSAGES,
} from "../constants/product-review.constants";
import type { ProductReviewErrors, ProductReviewInput } from "../types/product-review.types";

/**
 * Every field that still needs attention, or `null` when the review can be sent. Expects input
 * already normalized by `buildProductReviewInputHelper`; runs in the form and in the action.
 */
export const validateProductReviewInputHelper = ({
  rating,
  name,
  advantages,
  drawbacks,
  comment,
}: ProductReviewInput): ProductReviewErrors | null => {
  const errors: ProductReviewErrors = {};

  if (
    !Number.isInteger(rating) ||
    rating < PRODUCT_REVIEW_RATING_MIN ||
    rating > PRODUCT_REVIEW_RATING_MAX
  ) {
    errors.rating = PRODUCT_REVIEW_VALIDATION_MESSAGES.rating;
  }
  if (!name || name.length > PRODUCT_REVIEW_NAME_MAX_LENGTH) {
    errors.name = PRODUCT_REVIEW_VALIDATION_MESSAGES.name;
  }
  if (advantages.length > PRODUCT_REVIEW_PROS_CONS_MAX_LENGTH) {
    errors.advantages = PRODUCT_REVIEW_VALIDATION_MESSAGES.advantages;
  }
  if (drawbacks.length > PRODUCT_REVIEW_PROS_CONS_MAX_LENGTH) {
    errors.drawbacks = PRODUCT_REVIEW_VALIDATION_MESSAGES.drawbacks;
  }
  if (
    comment.length < PRODUCT_REVIEW_COMMENT_MIN_LENGTH ||
    comment.length > PRODUCT_REVIEW_COMMENT_MAX_LENGTH
  ) {
    errors.comment = PRODUCT_REVIEW_VALIDATION_MESSAGES.comment;
  }

  return Object.keys(errors).length > 0 ? errors : null;
};
