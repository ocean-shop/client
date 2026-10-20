import type { CatalogCategory } from "../types/catalog-categories.types";

export const filterParentCategoriesHelper = (
  categories: CatalogCategory[],
  limit: number
): CatalogCategory[] => {
  return categories.filter((category) => !category.parentId).slice(0, limit);
};
