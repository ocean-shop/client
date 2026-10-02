import type {
  CatalogCategoryOption,
  CatalogProductsQuery,
} from "@/app/shared/products/types/products.types";

export type CatalogFilterOption = {
  id: string;
  /** Raw attribute value sent to the API. */
  value: string;
  label: string;
  count?: number;
};

export type CatalogFilterGroup = {
  id: string;
  /** Raw attribute name sent to the API. */
  name: string;
  title: string;
  options: CatalogFilterOption[];
};

export type CatalogFiltersProps = {
  groups: CatalogFilterGroup[];
  /** Search only: the category page is already one category, so it passes none. */
  categories?: CatalogCategoryOption[];
  query: CatalogProductsQuery;
};
