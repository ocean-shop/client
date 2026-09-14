export type CatalogCategory = {
  id: string;
  name: string;
  slug: string;
};

export type CatalogCategoriesResponse = {
  items: CatalogCategory[];
};
