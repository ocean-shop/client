import type { ProductCardData } from "@/app/ui/product-card/types/product-card.types";

export type ProductRelatedCarouselProps = {
  /** The section heading, rendered on the server and placed beside the desktop arrows. */
  title: React.ReactNode;
  products: ProductCardData[];
};

export type ProductRelatedCarouselPosition = {
  /** The card currently snapped to the track's start. */
  index: number;
  /** The last index the track can scroll to; `0` when every card already fits. */
  maxIndex: number;
  /** One card width plus the gap, in px. */
  step: number;
};
