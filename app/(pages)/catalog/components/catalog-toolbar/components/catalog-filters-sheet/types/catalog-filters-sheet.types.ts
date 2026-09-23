import type { CatalogProductsQuery } from "@/app/shared/products/types/products.types";
import type { CatalogFilterGroup } from "../../../../catalog-filters/types/catalog-filters.types";

export type CatalogFiltersSheetProps = {
  isOpen: boolean;
  onClose: () => void;
  /** Total matching products for the currently applied query. */
  resultsCount: number;
  groups: CatalogFilterGroup[];
  query: CatalogProductsQuery;
};
