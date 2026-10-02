import {
  CATALOG_PRODUCTS_BY_SEARCH_API_URL,
  CATALOG_PRODUCTS_PAGE_SIZE,
  CATALOG_PRODUCTS_QUERY_PARAM,
  CATALOG_PRODUCTS_SEARCH_EMPTY_RESPONSE,
} from "../constants/products.constants";
import { buildCatalogProductsSearchParamsHelper } from "../helpers/build-catalog-products-search-params";
import type { CatalogProductsQuery, ProductSearchListResponse } from "../types/products.types";

/**
 * Same filters, sorting and pagination as the category listing, matched against a term.
 * The response carries the filters the term can be narrowed by, so the filter panel needs
 * no request of its own.
 */
export async function getCatalogProductsBySearch(
  query: CatalogProductsQuery
): Promise<ProductSearchListResponse> {
  const searchParams = buildCatalogProductsSearchParamsHelper(query);
  searchParams.set(CATALOG_PRODUCTS_QUERY_PARAM.page, String(query.page));
  searchParams.set(CATALOG_PRODUCTS_QUERY_PARAM.limit, String(CATALOG_PRODUCTS_PAGE_SIZE));

  try {
    const response = await fetch(CATALOG_PRODUCTS_BY_SEARCH_API_URL(searchParams.toString()), {
      next: { revalidate: 300 },
    });

    if (!response.ok) return CATALOG_PRODUCTS_SEARCH_EMPTY_RESPONSE;

    const productList: ProductSearchListResponse = await response.json();

    /** An API that does not send the filters yet leaves the panel empty rather than breaking it. */
    return { ...productList, filters: productList.filters ?? [] };
  } catch {
    return CATALOG_PRODUCTS_SEARCH_EMPTY_RESPONSE;
  }
}
