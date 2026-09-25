import type { Product } from "@/app/shared/products/types/products.types";

export type CatalogGridProps = {
  products: Product[];
  emptyMessage?: string;
};
