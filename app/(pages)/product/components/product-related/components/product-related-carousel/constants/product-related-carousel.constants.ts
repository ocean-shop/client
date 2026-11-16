import type { ProductRelatedCarouselPosition } from "../types/product-related-carousel.types";

export const PRODUCT_RELATED_CAROUSEL_PREVIOUS_LABEL = "Попередні товари";
export const PRODUCT_RELATED_CAROUSEL_NEXT_LABEL = "Наступні товари";

export const PRODUCT_RELATED_CAROUSEL_INITIAL_POSITION: ProductRelatedCarouselPosition = {
  index: 0,
  maxIndex: 0,
  step: 0,
};

/** Sub-pixel widths can leave a fraction of a px unscrolled at the track's end. */
export const PRODUCT_RELATED_CAROUSEL_SCROLL_TOLERANCE_PX = 2;

export const PRODUCT_RELATED_CAROUSEL_HEADER_CLASS_NAME =
  "flex items-center justify-between gap-6 px-4.5 lg:px-0";

export const PRODUCT_RELATED_CAROUSEL_NAV_CLASS_NAME = "hidden items-center gap-2 lg:flex";

export const PRODUCT_RELATED_CAROUSEL_NAV_BUTTON_CLASS_NAME =
  "border border-border-soft bg-background text-foreground hover:border-accent";

/** Native scrolling with snap points: swipeable on phones, driven by the arrows on desktop. */
export const PRODUCT_RELATED_CAROUSEL_TRACK_CLASS_NAME =
  "flex snap-x snap-mandatory scroll-px-4.5 gap-3 overflow-x-auto px-4.5 [scrollbar-width:none] lg:scroll-px-0 lg:gap-5 lg:px-0";

export const PRODUCT_RELATED_CAROUSEL_ITEM_CLASS_NAME =
  "grid w-[158px] shrink-0 snap-start lg:w-[285px]";

export const PRODUCT_RELATED_CAROUSEL_DOTS_CLASS_NAME = "hidden justify-center gap-1.5 lg:flex";

export const PRODUCT_RELATED_CAROUSEL_DOT_CLASS_NAME = "h-1.5 rounded-[3px] transition-all";

export const PRODUCT_RELATED_CAROUSEL_DOT_STATE_CLASS_NAMES = {
  active: "w-[18px] bg-accent",
  default: "w-1.5 bg-border-soft",
};
