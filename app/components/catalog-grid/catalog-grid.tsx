import { mapProductToCardDataHelper } from "@/app/shared/products/helpers/map-product-to-card-data";
import { ProductActionsCard } from "../product-actions-card/product-actions-card";
import {
  CATALOG_GRID_CLASS_NAME,
  CATALOG_GRID_EMPTY_MESSAGE,
} from "./constants/catalog-grid.constants";
import type { CatalogGridProps } from "./types/catalog-grid.types";

export const CatalogGrid = ({ products, emptyMessage, categorySlug }: CatalogGridProps) => {
  if (products.length === 0) {
    return <p className="text-muted-light">{emptyMessage ?? CATALOG_GRID_EMPTY_MESSAGE}</p>;
  }

  return (
    <div className={CATALOG_GRID_CLASS_NAME}>
      {products.map((product) => (
        <ProductActionsCard
          key={product.id}
          product={mapProductToCardDataHelper(product, categorySlug)}
        />
      ))}
    </div>
  );
};
