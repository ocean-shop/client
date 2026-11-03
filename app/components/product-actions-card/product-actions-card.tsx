import { ProductCard } from "@/app/ui/product-card/product-card";
import { ProductCardCartButton } from "../product-card-cart-button/product-card-cart-button";
import { ProductFavoriteButton } from "../product-favorite-button/product-favorite-button";
import type { ProductActionsCardProps } from "./types/product-actions-card.types";

/** `ProductCard` wired up with the add-to-cart button and the favourites heart. */
export const ProductActionsCard = ({
  product,
  size,
  initialIsFavorite,
}: ProductActionsCardProps) => {
  return (
    <ProductCard
      product={product}
      size={size}
      cta={<ProductCardCartButton productId={product.id} productName={product.name} />}
      favorite={
        <ProductFavoriteButton
          productId={product.id}
          productName={product.name}
          variant="card"
          initialIsFavorite={initialIsFavorite}
        />
      }
    />
  );
};
