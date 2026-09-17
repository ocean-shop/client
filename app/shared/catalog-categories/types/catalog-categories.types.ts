export type CatalogCategory = {
  id: string;
  name: string;
  slug: string;
  parentId: string | null;
};

export type CatalogCategoriesResponse = {
  items: CatalogCategory[];
};

export type CatalogCategoryTree = CatalogCategory & {
  subs: CatalogCategory[];
};
