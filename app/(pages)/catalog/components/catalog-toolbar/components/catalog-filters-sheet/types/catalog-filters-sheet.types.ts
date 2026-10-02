import type {
  CatalogCategoryOption,
  CatalogProductsQuery,
  CatalogProductsSource,
} from "@/app/shared/products/types/products.types";
import type { CatalogFilterGroup } from "../../../../catalog-filters/types/catalog-filters.types";

export type CatalogFiltersSheetProps = {
  isOpen: boolean;
  onClose: () => void;
  /** Owned by the toolbar so the transition outlives the sheet being closed. */
  onApply: (query: CatalogProductsQuery) => void;
  isApplying: boolean;
  source: CatalogProductsSource;
  /** Total matching products for the currently applied query. */
  resultsCount: number;
  groups: CatalogFilterGroup[];
  /** Search only: the category page is already one category, so it passes none. */
  categories?: CatalogCategoryOption[];
  query: CatalogProductsQuery;
};
