import {
  PRODUCT_RELATED_CAROUSEL_INITIAL_POSITION,
  PRODUCT_RELATED_CAROUSEL_SCROLL_TOLERANCE_PX,
} from "../constants/product-related-carousel.constants";
import type { ProductRelatedCarouselPosition } from "../types/product-related-carousel.types";

/**
 * Reads where the track is scrolled to, in whole cards. At the very end the last index wins even
 * when the final card is only partly past the start, so the "next" arrow disables there.
 */
export const readProductRelatedCarouselPositionHelper = (
  track: HTMLElement
): ProductRelatedCarouselPosition => {
  const firstItem = track.firstElementChild;

  if (!(firstItem instanceof HTMLElement)) return PRODUCT_RELATED_CAROUSEL_INITIAL_POSITION;

  const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0;
  const step = firstItem.offsetWidth + gap;
  const maxScroll = track.scrollWidth - track.clientWidth;

  if (step <= 0 || maxScroll <= PRODUCT_RELATED_CAROUSEL_SCROLL_TOLERANCE_PX) {
    return { ...PRODUCT_RELATED_CAROUSEL_INITIAL_POSITION, step };
  }

  const maxIndex = Math.ceil((maxScroll - PRODUCT_RELATED_CAROUSEL_SCROLL_TOLERANCE_PX) / step);
  const isAtEnd = track.scrollLeft >= maxScroll - PRODUCT_RELATED_CAROUSEL_SCROLL_TOLERANCE_PX;
  const index = isAtEnd ? maxIndex : Math.min(Math.round(track.scrollLeft / step), maxIndex);

  return { index, maxIndex, step };
};
