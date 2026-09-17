import type { ProductBadgeTone } from "../types/product-card.types";

export const PRODUCT_BADGE_TONE_STYLES: Record<ProductBadgeTone, string> = {
  sale: "text-accent-dark",
  new: "text-foreground",
  bestseller: "text-accent",
};

export const PRODUCT_CTA_STYLES = {
  default: "border border-border-soft bg-background text-accent hover:border-accent",
  inCart: "border border-accent bg-accent text-white",
};

export const PRODUCT_FAVORITE_ICON_STYLES = {
  active: "text-accent",
  inactive: "text-muted-light",
};
