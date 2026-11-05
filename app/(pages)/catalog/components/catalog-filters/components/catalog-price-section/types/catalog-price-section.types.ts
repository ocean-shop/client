import type { CatalogFilterVariant } from "../../../types/catalog-filters.types";

export type CatalogPriceSectionProps = {
  variant: CatalogFilterVariant;
  fromValue: string;
  toValue: string;
  onFromChange: (value: string) => void;
  onToChange: (value: string) => void;
  /** Placed under the inputs, e.g. an apply button. */
  children?: React.ReactNode;
};
