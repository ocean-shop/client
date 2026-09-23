import type { CatalogProductsQuery } from "@/app/shared/products/types/products.types";

export type CatalogPaginationProps = {
  query: CatalogProductsQuery;
  totalPages: number;
};
