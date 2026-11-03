import { cache } from "react";
import { API_DEFAULT_REVALIDATE_SECONDS } from "@/app/core/api/constants/api.constants";
import { fetchApiOrFallback } from "@/app/core/api/fetch-api-or-fallback";
import {
  CATALOG_PRODUCTS_BY_CATEGORY_API_URL,
  CATALOG_PRODUCTS_COUNT_LIMIT,
  CATALOG_PRODUCTS_EMPTY_RESPONSE,
  CATALOG_PRODUCTS_QUERY_PARAM,
} from "../constants/products.constants";

/** Unfiltered product total of a category; only `total` is read, so the page stays minimal. */
export const getCatalogProductsCountByCategory = cache(
  async (categoryId: string): Promise<number> => {
    const searchParams = new URLSearchParams({
      [CATALOG_PRODUCTS_QUERY_PARAM.limit]: String(CATALOG_PRODUCTS_COUNT_LIMIT),
    });

    const { total } = await fetchApiOrFallback(
      CATALOG_PRODUCTS_BY_CATEGORY_API_URL(categoryId, searchParams.toString()),
      { next: { revalidate: API_DEFAULT_REVALIDATE_SECONDS } },
      CATALOG_PRODUCTS_EMPTY_RESPONSE
    );

    return total;
  }
);
