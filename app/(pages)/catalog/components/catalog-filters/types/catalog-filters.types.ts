import type { CatalogProductsQuery } from "@/app/shared/products/types/products.types";

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
  query: CatalogProductsQuery;
};
