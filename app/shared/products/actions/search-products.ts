"use server";

import { apiFetch } from "@/app/core/api/api-fetch";
import {
  CATALOG_PRODUCTS_QUERY_PARAM,
  PRODUCT_SEARCH_API_URL,
  PRODUCT_SEARCH_EMPTY_RESPONSE,
  PRODUCT_SEARCH_TERM_MAX_LENGTH,
  PRODUCT_SEARCH_TERM_MIN_LENGTH,
} from "../constants/products.constants";
import type { ProductSearchResponse } from "../types/products.types";

/**
 * Suggestions for the header search panel. Runs as an action because `API_BASE_URL` is
 * server-only and the panel queries while the visitor is still typing.
 */
export async function searchProductsAction(searchTerm: string): Promise<ProductSearchResponse> {
  const term = searchTerm.trim().slice(0, PRODUCT_SEARCH_TERM_MAX_LENGTH);

  if (term.length < PRODUCT_SEARCH_TERM_MIN_LENGTH) return PRODUCT_SEARCH_EMPTY_RESPONSE;

  const searchParams = new URLSearchParams({ [CATALOG_PRODUCTS_QUERY_PARAM.query]: term });

  return apiFetch<ProductSearchResponse>(PRODUCT_SEARCH_API_URL(searchParams.toString()), {
    next: { revalidate: 60 },
  });
}
