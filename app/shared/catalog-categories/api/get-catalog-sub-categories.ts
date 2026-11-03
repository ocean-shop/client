import { cache } from "react";
import { API_DEFAULT_REVALIDATE_SECONDS } from "@/app/core/api/constants/api.constants";
import { fetchApiOrFallback } from "@/app/core/api/fetch-api-or-fallback";
import { CATALOG_SUB_CATEGORIES_API_URL } from "../constants/catalog-categories.constants";
import type { CatalogCategory } from "../types/catalog-categories.types";

/** Direct children of a category, unpaginated and already ordered by the endpoint. */
export const getCatalogSubCategories = cache(
  async (parentId: string): Promise<CatalogCategory[]> => {
    return fetchApiOrFallback<CatalogCategory[]>(
      CATALOG_SUB_CATEGORIES_API_URL(parentId),
      { next: { revalidate: API_DEFAULT_REVALIDATE_SECONDS } },
      []
    );
  }
);
