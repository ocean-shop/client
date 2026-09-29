import type {
  CatalogProductsQuery,
  CatalogProductsSource,
} from "@/app/shared/products/types/products.types";
import type { CatalogFilterGroup } from "../../catalog-filters/types/catalog-filters.types";

export type CatalogToolbarProps = {
  /** Which listing the draft filters are counted against. */
  source: CatalogProductsSource;
  query: CatalogProductsQuery;
  /** Total matching products for the currently applied query. */
  resultsCount: number;
  filterGroups: CatalogFilterGroup[];
};
