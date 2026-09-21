export type CatalogFilterOption = {
  id: string;
  label: string;
  count: number;
};

export type CatalogFilterGroup = {
  id: string;
  title: string;
  options: CatalogFilterOption[];
};
