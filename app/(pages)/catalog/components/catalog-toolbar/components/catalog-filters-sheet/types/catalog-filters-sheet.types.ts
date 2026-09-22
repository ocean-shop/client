import type { CatalogFilterGroup } from "../../../../catalog-filters/types/catalog-filters.types";

export type CatalogFiltersSheetProps = {
  isOpen: boolean;
  onClose: () => void;
  onSelectedCountChange: (count: number) => void;
  resultsCount: number;
  groups: CatalogFilterGroup[];
};
