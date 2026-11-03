import type {
  ProductCardData,
  ProductCardSize,
} from "@/app/ui/product-card/types/product-card.types";

export type ProductActionsCardProps = {
  product: ProductCardData;
  size?: ProductCardSize;
  /** Passed to the heart, for lists that are favourites already. */
  initialIsFavorite?: boolean;
};
