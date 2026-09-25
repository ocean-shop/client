import { cache } from "react";
import { CATALOG_FILTERS_BY_CATEGORY_API_URL } from "../constants/products.constants";
import type { CatalogFilter } from "../types/products.types";

export const getCatalogFiltersByCategory = cache(
  async (categoryId: string): Promise<CatalogFilter[]> => {
    try {
      const response = await fetch(CATALOG_FILTERS_BY_CATEGORY_API_URL(categoryId), {
        next: { revalidate: 300 },
      });

      if (!response.ok) return [];

      const filters: CatalogFilter[] = await response.json();

      return filters;
    } catch {
      return [];
    }
  }
);
