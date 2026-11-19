"use client";

import { ProductActionsCard } from "@/app/components/product-actions-card/product-actions-card";
import { Button } from "@/app/ui/button/button";
import { MaterialIcon } from "@/app/ui/material-icon/material-icon";
import {
  PRODUCT_RELATED_CAROUSEL_DOT_CLASS_NAME,
  PRODUCT_RELATED_CAROUSEL_DOT_STATE_CLASS_NAMES,
  PRODUCT_RELATED_CAROUSEL_DOTS_CLASS_NAME,
  PRODUCT_RELATED_CAROUSEL_HEADER_CLASS_NAME,
  PRODUCT_RELATED_CAROUSEL_ITEM_CLASS_NAME,
  PRODUCT_RELATED_CAROUSEL_NAV_BUTTON_CLASS_NAME,
  PRODUCT_RELATED_CAROUSEL_NAV_CLASS_NAME,
  PRODUCT_RELATED_CAROUSEL_NEXT_LABEL,
  PRODUCT_RELATED_CAROUSEL_PREVIOUS_LABEL,
  PRODUCT_RELATED_CAROUSEL_TRACK_CLASS_NAME,
} from "./constants/product-related-carousel.constants";
import { useProductRelatedCarousel } from "./hooks/use-product-related-carousel";
import type { ProductRelatedCarouselProps } from "./types/product-related-carousel.types";

/** A swipeable row of cards on phones; on desktop, arrows and dots page through it card by card. */
export const ProductRelatedCarousel = ({ title, products }: ProductRelatedCarouselProps) => {
  const { trackRef, index, maxIndex, scrollToPrevious, scrollToNext } = useProductRelatedCarousel();
  const isScrollable = maxIndex > 0;

  return (
    <>
      <div className={PRODUCT_RELATED_CAROUSEL_HEADER_CLASS_NAME}>
        {title}

        {isScrollable && (
          <div className={PRODUCT_RELATED_CAROUSEL_NAV_CLASS_NAME}>
            <Button
              variant="unstyled"
              size="icon"
              aria-label={PRODUCT_RELATED_CAROUSEL_PREVIOUS_LABEL}
              onClick={scrollToPrevious}
              disabled={index === 0}
              className={PRODUCT_RELATED_CAROUSEL_NAV_BUTTON_CLASS_NAME}
            >
              <MaterialIcon name="chevron_left" className="text-xl" />
            </Button>

            <Button
              variant="unstyled"
              size="icon"
              aria-label={PRODUCT_RELATED_CAROUSEL_NEXT_LABEL}
              onClick={scrollToNext}
              disabled={index >= maxIndex}
              className={PRODUCT_RELATED_CAROUSEL_NAV_BUTTON_CLASS_NAME}
            >
              <MaterialIcon name="chevron_right" className="text-xl" />
            </Button>
          </div>
        )}
      </div>

      <div ref={trackRef} className={PRODUCT_RELATED_CAROUSEL_TRACK_CLASS_NAME}>
        {products.map((product) => (
          <div key={product.id} className={PRODUCT_RELATED_CAROUSEL_ITEM_CLASS_NAME}>
            <ProductActionsCard product={product} size="compact" />
          </div>
        ))}
      </div>

      {isScrollable && (
        <div aria-hidden className={PRODUCT_RELATED_CAROUSEL_DOTS_CLASS_NAME}>
          {Array.from({ length: maxIndex + 1 }, (_, dotIndex) => (
            <span
              key={dotIndex}
              className={`${PRODUCT_RELATED_CAROUSEL_DOT_CLASS_NAME} ${
                PRODUCT_RELATED_CAROUSEL_DOT_STATE_CLASS_NAMES[
                  dotIndex === index ? "active" : "default"
                ]
              }`}
            />
          ))}
        </div>
      )}
    </>
  );
};
