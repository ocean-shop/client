import type { CatalogFilterVariant } from "../../../types/catalog-filters.types";

export type CatalogFilterSectionProps = {
  variant: CatalogFilterVariant;
  title: string;
  /** Sits at the end of the title row, e.g. a collapse toggle. */
  action?: React.ReactNode;
  children: React.ReactNode;
};
