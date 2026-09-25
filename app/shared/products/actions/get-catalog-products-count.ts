"use server";

import { apiFetch } from "@/app/core/api/api-fetch";
import {
  CATALOG_PRODUCTS_BY_CATEGORY_API_URL,
  CATALOG_PRODUCTS_COUNT_LIMIT,
  CATALOG_PRODUCTS_QUERY_PARAM,
} from "../constants/products.constants";
import type { ProductListResponse } from "../types/products.types";

/**
 * Counts products matching draft filters before they reach the URL.
 * Runs as an action because `API_BASE_URL` is server-only and the sheet needs the total
 * while the user is still choosing.
 */
export async function getCatalogProductsCountAction(
  categoryId: string,
  searchParams: string
): Promise<number> {
  const params = new URLSearchParams(searchParams);
  params.set(CATALOG_PRODUCTS_QUERY_PARAM.limit, String(CATALOG_PRODUCTS_COUNT_LIMIT));

  const productList = await apiFetch<ProductListResponse>(
    CATALOG_PRODUCTS_BY_CATEGORY_API_URL(categoryId, params.toString()),
    { next: { revalidate: 300 } }
  );

  return productList.total;
}
