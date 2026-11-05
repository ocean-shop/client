import type { CatalogFilterVariant } from "../../../types/catalog-filters.types";

export type CatalogAvailabilityFilterProps = {
  variant: CatalogFilterVariant;
  checked: boolean;
  onChange: (checked: boolean) => void;
};
