import { cache } from "react";
import { CATALOG_SUB_CATEGORIES_API_URL } from "../constants/catalog-categories.constants";
import type { CatalogCategory } from "../types/catalog-categories.types";

/** Direct children of a category, unpaginated and already ordered by the endpoint. */
export const getCatalogSubCategories = cache(
  async (parentId: string): Promise<CatalogCategory[]> => {
    try {
      const response = await fetch(CATALOG_SUB_CATEGORIES_API_URL(parentId), {
        next: { revalidate: 300 },
      });

      if (!response.ok) return [];

      const subCategories: CatalogCategory[] = await response.json();

      return subCategories;
    } catch {
      return [];
    }
  }
);
