import { ProductCardSkeleton } from "@/app/ui/product-card-skeleton/product-card-skeleton";
import { CATALOG_GRID_CLASS_NAME } from "../../constants/catalog-grid.constants";
import { CATALOG_GRID_SKELETON_LOADING_LABEL } from "./constants/catalog-grid-skeleton.constants";
import type { CatalogGridSkeletonProps } from "./types/catalog-grid-skeleton.types";

export function CatalogGridSkeleton({ count }: CatalogGridSkeletonProps) {
  return (
    <div
      role="status"
      aria-busy
      aria-label={CATALOG_GRID_SKELETON_LOADING_LABEL}
      className={CATALOG_GRID_CLASS_NAME}
    >
      {Array.from({ length: count }, (_, index) => (
        <ProductCardSkeleton key={index} />
      ))}
    </div>
  );
}
