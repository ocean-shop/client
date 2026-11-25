import type { ProductReviewInput } from "../types/product-review.types";

/**
 * Trims the text fields and coerces every field to its type, since the server action receives
 * the input from the client as untrusted data. A rating that is not a number becomes `0`.
 */
export const buildProductReviewInputHelper = (input: ProductReviewInput): ProductReviewInput => {
  const rating = Number(input.rating);

  return {
    productId: String(input.productId ?? "").trim(),
    rating: Number.isFinite(rating) ? rating : 0,
    name: String(input.name ?? "").trim(),
    advantages: String(input.advantages ?? "").trim(),
    drawbacks: String(input.drawbacks ?? "").trim(),
    comment: String(input.comment ?? "").trim(),
  };
};
