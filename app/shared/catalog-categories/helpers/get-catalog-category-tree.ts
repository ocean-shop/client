import { cache } from "react";
import { buildCatalogCategoryTreeHelper } from "./build-catalog-category-tree";
import { getCatalogCategories } from "../api/get-catalog-categories";
import type { CatalogCategoryTree } from "../types/catalog-categories.types";

export const getCatalogCategoryTreeHelper = cache(async (): Promise<CatalogCategoryTree[]> => {
  const categories = await getCatalogCategories();

  return buildCatalogCategoryTreeHelper(categories);
});
