export type CatalogPriceFilterValue = {
  priceFrom?: number;
  priceTo?: number;
};

export type CatalogPriceFilterProps = CatalogPriceFilterValue & {
  onApply: (value: CatalogPriceFilterValue) => void;
};
