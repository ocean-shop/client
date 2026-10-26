import { ProductCard } from "../../ui/product-card/product-card";
import { mapProductToCardDataHelper } from "../../shared/products/helpers/map-product-to-card-data";
import { ProductCardCartButton } from "../product-card-cart-button/product-card-cart-button";
import { ProductFavoriteButton } from "../product-favorite-button/product-favorite-button";
import {
  CATALOG_GRID_CLASS_NAME,
  CATALOG_GRID_EMPTY_MESSAGE,
} from "./constants/catalog-grid.constants";
import type { CatalogGridProps } from "./types/catalog-grid.types";

export const CatalogGrid = ({ products, emptyMessage, categorySlug }: CatalogGridProps) => {
  const catalogProducts = products.map((product) =>
    mapProductToCardDataHelper(product, categorySlug)
  );

  if (catalogProducts.length === 0) {
    return <p className="text-muted-light">{emptyMessage ?? CATALOG_GRID_EMPTY_MESSAGE}</p>;
  }

  return (
    <div className={CATALOG_GRID_CLASS_NAME}>
      {catalogProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          cta={<ProductCardCartButton productId={product.id} productName={product.name} />}
          favorite={
            <ProductFavoriteButton
              productId={product.id}
              productName={product.name}
              variant="card"
            />
          }
        />
      ))}
    </div>
  );
};
