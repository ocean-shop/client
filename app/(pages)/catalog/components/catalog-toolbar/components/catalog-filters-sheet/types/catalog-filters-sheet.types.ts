export type CatalogFiltersSheetProps = {
  isOpen: boolean;
  onClose: () => void;
  onSelectedCountChange: (count: number) => void;
  resultsCount: number;
};
