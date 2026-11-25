"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { createProductReviewAction } from "@/app/(pages)/product/actions/create-product-review";
import { PRODUCT_REVIEW_UNAUTHORIZED_STATUS } from "@/app/(pages)/product/constants/product-review.constants";
import { buildProductReviewInputHelper } from "@/app/(pages)/product/helpers/build-product-review-input";
import { validateProductReviewInputHelper } from "@/app/(pages)/product/helpers/validate-product-review-input";
import type {
  ProductReviewErrors,
  ProductReviewField,
  ProductReviewInput,
} from "@/app/(pages)/product/types/product-review.types";
import { DEFAULT_API_ERROR_MESSAGE } from "@/app/core/api/constants/api.constants";
import { getApiActionErrorMessage } from "@/app/core/api/helpers/get-api-action-error-message";
import { toastStore } from "@/app/core/providers/toast-provider/toast-store";
import { buildAuthLoginHref } from "@/app/shared/auth/helpers/build-auth-login-href";
import { PRODUCT_REVIEW_FORM_ERROR_TOAST_TITLE } from "../constants/product-review-form.constants";
import { readProductReviewFormValuesHelper } from "../helpers/read-product-review-form-values";

/**
 * Validates the review on submit and sends it. A session that expired while the form was open
 * sends the shopper to sign in; any other failure is reported in a toast and keeps the form.
 */
export const useProductReviewForm = (productId: string, onSent: () => void) => {
  const router = useRouter();
  const [rating, setRating] = useState(0);
  const [commentLength, setCommentLength] = useState(0);
  const [errors, setErrors] = useState<ProductReviewErrors>({});
  const [isSending, setIsSending] = useState(false);

  const clearError = (field: ProductReviewField) => {
    setErrors((current) => ({ ...current, [field]: null }));
  };

  const changeRating = (nextRating: number) => {
    setRating(nextRating);
    clearError("rating");
  };

  const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentLength(event.target.value.length);
    clearError("comment");
  };

  const sendReview = async (input: ProductReviewInput) => {
    setIsSending(true);

    try {
      const result = await createProductReviewAction(input);

      if (result.ok) {
        onSent();
        return;
      }

      if (result.status === PRODUCT_REVIEW_UNAUTHORIZED_STATUS) {
        router.push(buildAuthLoginHref(`${window.location.pathname}${window.location.search}`));
        return;
      }

      toastStore.error(PRODUCT_REVIEW_FORM_ERROR_TOAST_TITLE, getApiActionErrorMessage(result));
    } catch {
      toastStore.error(PRODUCT_REVIEW_FORM_ERROR_TOAST_TITLE, DEFAULT_API_ERROR_MESSAGE);
    } finally {
      setIsSending(false);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSending) return;

    const input = buildProductReviewInputHelper({
      productId,
      rating,
      ...readProductReviewFormValuesHelper(event.currentTarget),
    });
    const nextErrors = validateProductReviewInputHelper(input);

    if (nextErrors) {
      setErrors(nextErrors);
      return;
    }

    await sendReview(input);
  };

  return {
    rating,
    commentLength,
    errors,
    isSending,
    clearError,
    changeRating,
    handleCommentChange,
    handleSubmit,
  };
};
