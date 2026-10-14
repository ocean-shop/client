import type { ProductBadgeTone } from "../types/product-card.types";

export const PRODUCT_BADGE_TONE_STYLES: Record<ProductBadgeTone, string> = {
  sale: "text-accent-dark",
  new: "text-foreground",
  bestseller: "text-accent",
};

/** Matches the widest grid the card sits in: 1 column on mobile, 2 from md, 3–4 from lg (page caps at 1600px). */
export const PRODUCT_CARD_IMAGE_SIZES =
  "(min-width: 1600px) 400px, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw";

/** For the button a caller passes as the card's `cta`, so every card action looks the same. */
export const PRODUCT_CTA_CLASS_NAME = "h-11 rounded-[10px] text-sm font-semibold";

export const PRODUCT_CTA_STYLES = {
  default: "border border-border-soft bg-background text-accent hover:border-accent",
  inCart: "border border-accent bg-accent text-white",
};

export const PRODUCT_FAVORITE_ICON_STYLES = {
  active: "text-accent",
  inactive: "text-muted-light",
};
