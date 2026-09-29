import {
  CATALOG_PRODUCTS_BY_SEARCH_API_URL,
  CATALOG_PRODUCTS_EMPTY_RESPONSE,
  CATALOG_PRODUCTS_PAGE_SIZE,
  CATALOG_PRODUCTS_QUERY_PARAM,
} from "../constants/products.constants";
import { buildCatalogProductsSearchParamsHelper } from "../helpers/build-catalog-products-search-params";
import type { CatalogProductsQuery, ProductListResponse } from "../types/products.types";

/** Same filters, sorting and pagination as the category listing, matched against a term. */
export async function getCatalogProductsBySearch(
  query: CatalogProductsQuery
): Promise<ProductListResponse> {
  const searchParams = buildCatalogProductsSearchParamsHelper(query);
  searchParams.set(CATALOG_PRODUCTS_QUERY_PARAM.page, String(query.page));
  searchParams.set(CATALOG_PRODUCTS_QUERY_PARAM.limit, String(CATALOG_PRODUCTS_PAGE_SIZE));

  try {
    const response = await fetch(CATALOG_PRODUCTS_BY_SEARCH_API_URL(searchParams.toString()), {
      next: { revalidate: 300 },
    });

    if (!response.ok) return CATALOG_PRODUCTS_EMPTY_RESPONSE;

    return await response.json();
  } catch {
    return CATALOG_PRODUCTS_EMPTY_RESPONSE;
  }
}
