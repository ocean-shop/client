"use server";

import { apiFetch } from "@/app/core/api/api-fetch";
import {
  CATALOG_PRODUCTS_BY_CATEGORY_API_URL,
  CATALOG_PRODUCTS_BY_SEARCH_API_URL,
  CATALOG_PRODUCTS_COUNT_LIMIT,
  CATALOG_PRODUCTS_QUERY_PARAM,
} from "../constants/products.constants";
import type { CatalogProductsSource, ProductListResponse } from "../types/products.types";

/**
 * Counts products matching draft filters before they reach the URL.
 * Runs as an action because `API_BASE_URL` is server-only and the sheet needs the total
 * while the user is still choosing.
 */
export async function getCatalogProductsCountAction(
  source: CatalogProductsSource,
  searchParams: string
): Promise<number> {
  const params = new URLSearchParams(searchParams);
  params.set(CATALOG_PRODUCTS_QUERY_PARAM.limit, String(CATALOG_PRODUCTS_COUNT_LIMIT));

  /** On the search page the term already rides along in `searchParams`. */
  const url =
    source.kind === "category"
      ? CATALOG_PRODUCTS_BY_CATEGORY_API_URL(source.categoryId, params.toString())
      : CATALOG_PRODUCTS_BY_SEARCH_API_URL(params.toString());

  const productList = await apiFetch<ProductListResponse>(url, { next: { revalidate: 300 } });

  return productList.total;
}
