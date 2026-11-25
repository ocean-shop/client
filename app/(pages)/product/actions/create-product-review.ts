"use server";

import { API_JSON_HEADERS, API_SHOP_ID } from "@/app/core/api/constants/api.constants";
import { readApiActionFailure } from "@/app/core/api/helpers/read-api-action-failure";
import { authFetch } from "@/app/shared/auth/helpers/auth-fetch";
import { getAuthUser } from "@/app/shared/auth/helpers/get-auth-user";
import { PRODUCT_ID_PATTERN } from "@/app/shared/products/constants/products.constants";
import { getProductReviewAuthorName } from "../api/get-product-review-author-name";
import { PRODUCT_REVIEW_CREATE_API_URL } from "../constants/product-review-api.constants";
import {
  PRODUCT_REVIEW_INVALID_FAILURE,
  PRODUCT_REVIEW_UNAUTHORIZED_FAILURE,
  PRODUCT_REVIEW_UNAVAILABLE_FAILURE,
} from "../constants/product-review.constants";
import { buildProductReviewInputHelper } from "../helpers/build-product-review-input";
import { validateProductReviewInputHelper } from "../helpers/validate-product-review-input";
import type {
  ProductReviewInput,
  ProductReviewRequest,
  ProductReviewResult,
} from "../types/product-review.types";

/**
 * Sends the signed-in user's review of a product; it shows up once a moderator approves it.
 * The author comes from the session and "approved purchase" from their orders on the backend,
 * never from the input; the signature is the profile's first name when it has one. Re-validates the input; never throws — failures come back as
 * `{ ok: false }`, with status 401 for a guest.
 */
export const createProductReviewAction = async (
  input: ProductReviewInput
): Promise<ProductReviewResult> => {
  if (!input || typeof input !== "object") return PRODUCT_REVIEW_INVALID_FAILURE;

  const user = await getAuthUser();

  if (!user) return PRODUCT_REVIEW_UNAUTHORIZED_FAILURE;

  // A profile name signs the review, whatever the client sent; the form hides the field then.
  const authorName = await getProductReviewAuthorName(user.id);
  const normalized = buildProductReviewInputHelper({ ...input, name: authorName ?? input.name });

  if (
    !PRODUCT_ID_PATTERN.test(normalized.productId) ||
    validateProductReviewInputHelper(normalized)
  ) {
    return PRODUCT_REVIEW_INVALID_FAILURE;
  }

  const { productId, rating, name, advantages, drawbacks, comment } = normalized;
  const body: ProductReviewRequest = {
    shopId: API_SHOP_ID,
    productId,
    rating,
    name,
    comment,
    ...(advantages && { advantages }),
    ...(drawbacks && { drawbacks }),
  };

  try {
    const response = await authFetch(PRODUCT_REVIEW_CREATE_API_URL, {
      method: "POST",
      headers: API_JSON_HEADERS,
      body: JSON.stringify(body),
    });

    if (!response.ok) return readApiActionFailure(response);

    return { ok: true };
  } catch {
    return PRODUCT_REVIEW_UNAVAILABLE_FAILURE;
  }
};
