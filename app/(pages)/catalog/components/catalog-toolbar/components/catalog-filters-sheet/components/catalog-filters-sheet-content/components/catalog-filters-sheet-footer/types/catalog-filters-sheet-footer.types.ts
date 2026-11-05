export type CatalogFiltersSheetFooterProps = {
  onReset: () => void;
  onShowResults: () => void;
  isApplying: boolean;
  /** Dims the number while it is out of date. */
  isCounting: boolean;
  count: number;
};
