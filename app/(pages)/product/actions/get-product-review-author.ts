"use server";

import { getAuthUser } from "@/app/shared/auth/helpers/get-auth-user";
import { getProductReviewAuthorName } from "../api/get-product-review-author-name";
import { PRODUCT_REVIEW_GUEST_AUTHOR } from "../constants/product-review.constants";
import type { ProductReviewAuthor } from "../types/product-review.types";

/**
 * Who is about to write a review: whether the visitor has a session and, if their profile has
 * one, the first name to sign the review with. Asked on demand so the product page stays static.
 */
export const getProductReviewAuthorAction = async (): Promise<ProductReviewAuthor> => {
  const user = await getAuthUser();

  if (!user) return PRODUCT_REVIEW_GUEST_AUTHOR;

  return { isSignedIn: true, firstName: await getProductReviewAuthorName(user.id) };
};
