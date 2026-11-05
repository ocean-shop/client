import { cache } from "react";
import { API_DEFAULT_REVALIDATE_SECONDS } from "@/app/core/api/constants/api.constants";
import { fetchApiOrFallback } from "@/app/core/api/fetch-api-or-fallback";
import {
  CATALOG_CATEGORIES_API_URL,
  CATALOG_CATEGORIES_EMPTY_RESPONSE,
} from "../constants/catalog-categories.constants";
import type { CatalogCategory } from "../types/catalog-categories.types";

export const getCatalogCategories = cache(async (): Promise<CatalogCategory[]> => {
  const { items } = await fetchApiOrFallback(
    CATALOG_CATEGORIES_API_URL,
    { next: { revalidate: API_DEFAULT_REVALIDATE_SECONDS } },
    CATALOG_CATEGORIES_EMPTY_RESPONSE
  );

  return items;
});
