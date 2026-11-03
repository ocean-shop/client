import type { ProductBadgeTone } from "@/app/ui/product-card/types/product-card.types";

export const PRODUCT_CARD_MEDIA_BADGE_CLASS_NAME =
  "absolute left-3 top-3 rounded-md bg-background px-[9px] py-1 text-[11px] font-semibold tracking-[.03em]";

export const PRODUCT_BADGE_TONE_STYLES: Record<ProductBadgeTone, string> = {
  sale: "text-accent-dark",
  new: "text-foreground",
  bestseller: "text-accent",
};
