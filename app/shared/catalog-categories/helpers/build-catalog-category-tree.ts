import type { CatalogCategory, CatalogCategoryTree } from "../types/catalog-categories.types";

export const buildCatalogCategoryTreeHelper = (
  categories: CatalogCategory[]
): CatalogCategoryTree[] => {
  return categories
    .filter((category) => !category.parentId)
    .map((category) => ({
      ...category,
      subs: categories.filter((sub) => sub.parentId === category.id),
    }));
};
