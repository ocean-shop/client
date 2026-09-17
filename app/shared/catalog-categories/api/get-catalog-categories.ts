import { cache } from "react";
import { CATALOG_CATEGORIES_API_URL } from "../constants/catalog-categories.constants";
import type { CatalogCategoriesResponse, CatalogCategory } from "../types/catalog-categories.types";

export const getCatalogCategories = cache(async (): Promise<CatalogCategory[]> => {
  try {
    const response = await fetch(CATALOG_CATEGORIES_API_URL, {
      next: { revalidate: 300 },
    });

    if (!response.ok) return [];

    const { items }: CatalogCategoriesResponse = await response.json();

    return items;
  } catch {
    return [];
  }
});
