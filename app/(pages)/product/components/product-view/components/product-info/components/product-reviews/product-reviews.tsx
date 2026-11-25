"use client";

import { SurfaceCard } from "@/app/ui/surface-card/surface-card";
import { ProductReviewForm } from "./components/product-review-form/product-review-form";
import { ProductReviewSuccess } from "./components/product-review-success/product-review-success";
import { ProductReviewsList } from "./components/product-reviews-list/product-reviews-list";
import {
  PRODUCT_REVIEWS_CARD_CLASS_NAME,
  PRODUCT_REVIEWS_TITLE,
  PRODUCT_REVIEWS_TITLE_CLASS_NAME,
} from "./constants/product-reviews.constants";
import { useProductReviewsView } from "./hooks/use-product-reviews-view";
import type { ProductReviewsProps } from "./types/product-reviews.types";

/**
 * "Відгуки" card: approved reviews with "show more", and in their place, for a signed-in
 * shopper, the form for a new review and its thank-you once sent.
 */
export const ProductReviews = ({ product, offer, initialReviews }: ProductReviewsProps) => {
  const { view, titleRef, isCheckingSession, openForm, showForm, showList, showSuccess } =
    useProductReviewsView();

  return (
    <SurfaceCard as="section" padding="none" className={PRODUCT_REVIEWS_CARD_CLASS_NAME}>
      <h2 ref={titleRef} className={PRODUCT_REVIEWS_TITLE_CLASS_NAME}>
        {PRODUCT_REVIEWS_TITLE}
      </h2>

      {view === "list" && (
        <ProductReviewsList
          productId={product.id}
          initialReviews={initialReviews}
          isOpeningForm={isCheckingSession}
          onWriteReview={openForm}
        />
      )}

      {view === "form" && (
        <ProductReviewForm
          product={product}
          offer={offer}
          onCancel={showList}
          onSent={showSuccess}
        />
      )}

      {view === "success" && (
        <ProductReviewSuccess onShowReviews={showList} onWriteAnother={showForm} />
      )}
    </SurfaceCard>
  );
};
