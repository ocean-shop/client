import { cache } from "react";
import { API_DEFAULT_REVALIDATE_SECONDS } from "@/app/core/api/constants/api.constants";
import { fetchApiOrFallback } from "@/app/core/api/fetch-api-or-fallback";
import { CATALOG_FILTERS_BY_CATEGORY_API_URL } from "../constants/products.constants";
import type { CatalogFilter } from "../types/products.types";

export const getCatalogFiltersByCategory = cache(
  async (categoryId: string): Promise<CatalogFilter[]> => {
    return fetchApiOrFallback<CatalogFilter[]>(
      CATALOG_FILTERS_BY_CATEGORY_API_URL(categoryId),
      { next: { revalidate: API_DEFAULT_REVALIDATE_SECONDS } },
      []
    );
  }
);
