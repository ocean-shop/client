export type CatalogPanelSubcategory = {
  name: string;
  count: string;
};

export type CatalogPanelCategory = {
  id: string;
  label: string;
  icon: string;
  subs: CatalogPanelSubcategory[];
};

export type CatalogPanelPromo = {
  badge: string;
  title: string;
  description: string;
  price: string;
  oldPrice: string;
  ctaLabel: string;
};
