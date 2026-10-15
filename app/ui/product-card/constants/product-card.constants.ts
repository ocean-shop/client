import type {
  ProductBadgeTone,
  ProductCardSize,
  ProductCardSizeStyles,
} from "../types/product-card.types";

export const PRODUCT_BADGE_TONE_STYLES: Record<ProductBadgeTone, string> = {
  sale: "text-accent-dark",
  new: "text-foreground",
  bestseller: "text-accent",
};

/**
 * Matches the widest grid the card sits in: 1 column on mobile, 2 from md, 3–4 from lg (page caps at 1600px).
 * Below lg, the page padding (18px+ per side) and card padding (14px per side) are subtracted so phones
 * don't download a full-viewport image.
 */
export const PRODUCT_CARD_IMAGE_SIZES =
  "(min-width: 1600px) 400px, (min-width: 1024px) 33vw, (min-width: 768px) calc(50vw - 40px), calc(100vw - 64px)";

/** Compact cards sit two to a row below `lg`, so their photos are asked for at half the width. */
export const PRODUCT_CARD_COMPACT_IMAGE_SIZES =
  "(min-width: 1600px) 400px, (min-width: 1024px) 33vw, 50vw";

export const PRODUCT_CARD_SIZE_STYLES: Record<ProductCardSize, ProductCardSizeStyles> = {
  default: {
    root: "gap-3 rounded-2xl p-3.5",
    image: "h-[240px] rounded-xl",
    imageSizes: PRODUCT_CARD_IMAGE_SIZES,
    favorite: "right-2.5 top-2.5",
    name: "text-[15px] leading-[1.4]",
    price: "text-[18px]",
    oldPrice: "text-[13px]",
  },
  compact: {
    root: "gap-2 rounded-[14px] p-2.5 lg:gap-3 lg:rounded-2xl lg:p-3.5",
    image: "h-[140px] rounded-[10px] lg:h-[200px] lg:rounded-xl",
    imageSizes: PRODUCT_CARD_COMPACT_IMAGE_SIZES,
    favorite: "right-2 top-2 lg:right-2.5 lg:top-2.5",
    name: "text-[13.5px] leading-[1.35] lg:text-[15px] lg:leading-[1.4]",
    price: "text-[15px] lg:text-[18px]",
    oldPrice: "text-[11.5px] lg:text-[13px]",
  },
};

/** For the button a caller passes as the card's `cta`, so every card action looks the same. */
export const PRODUCT_CTA_CLASS_NAME = "h-11 rounded-[10px] text-sm font-semibold";

export const PRODUCT_CTA_STYLES = {
  default: "border border-border-soft bg-background text-accent hover:border-accent",
  inCart: "border border-accent bg-accent text-white",
};
