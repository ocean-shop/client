import type {
  ProductCardData,
  ProductCardProps,
  ProductCardSizeStyles,
} from "@/app/ui/product-card/types/product-card.types";

export type ProductCardMediaProps = Pick<ProductCardProps, "favorite"> & {
  product: Pick<ProductCardData, "href" | "name" | "image" | "imageAlt" | "badge">;
  styles: ProductCardSizeStyles;
};
