import { cache } from "react";
import {
  CATALOG_PRODUCTS_BY_CATEGORY_API_URL,
  CATALOG_PRODUCTS_COUNT_LIMIT,
  CATALOG_PRODUCTS_QUERY_PARAM,
} from "../constants/products.constants";
import type { ProductListResponse } from "../types/products.types";

/** Unfiltered product total of a category; only `total` is read, so the page stays minimal. */
export const getCatalogProductsCountByCategory = cache(
  async (categoryId: string): Promise<number> => {
    const searchParams = new URLSearchParams({
      [CATALOG_PRODUCTS_QUERY_PARAM.limit]: String(CATALOG_PRODUCTS_COUNT_LIMIT),
    });

    try {
      const response = await fetch(
        CATALOG_PRODUCTS_BY_CATEGORY_API_URL(categoryId, searchParams.toString()),
        { next: { revalidate: 300 } }
      );

      if (!response.ok) return 0;

      const { total }: ProductListResponse = await response.json();

      return total;
    } catch {
      return 0;
    }
  }
);
