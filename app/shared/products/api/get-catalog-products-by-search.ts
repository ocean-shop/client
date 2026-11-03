import { API_DEFAULT_REVALIDATE_SECONDS } from "@/app/core/api/constants/api.constants";
import { fetchApiOrFallback } from "@/app/core/api/fetch-api-or-fallback";
import {
  CATALOG_PRODUCTS_BY_SEARCH_API_URL,
  CATALOG_PRODUCTS_SEARCH_EMPTY_RESPONSE,
} from "../constants/products.constants";
import { buildCatalogProductsPageSearchParamsHelper } from "../helpers/build-catalog-products-page-search-params";
import type { CatalogProductsQuery, ProductSearchListResponse } from "../types/products.types";

/**
 * Same filters, sorting and pagination as the category listing, matched against a term.
 * The response carries the filters and the categories the term can be narrowed by, so the
 * filter panel needs no request of its own.
 */
export const getCatalogProductsBySearch = async (
  query: CatalogProductsQuery
): Promise<ProductSearchListResponse> => {
  const productList = await fetchApiOrFallback(
    CATALOG_PRODUCTS_BY_SEARCH_API_URL(buildCatalogProductsPageSearchParamsHelper(query)),
    { next: { revalidate: API_DEFAULT_REVALIDATE_SECONDS } },
    CATALOG_PRODUCTS_SEARCH_EMPTY_RESPONSE
  );

  /** An API that does not send them yet leaves the panel empty rather than breaking it. */
  return {
    ...productList,
    filters: productList.filters ?? [],
    categories: productList.categories ?? [],
  };
};
