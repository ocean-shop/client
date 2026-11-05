import { API_DEFAULT_REVALIDATE_SECONDS } from "@/app/core/api/constants/api.constants";
import { fetchApiOrFallback } from "@/app/core/api/fetch-api-or-fallback";
import {
  CATALOG_PRODUCTS_BY_CATEGORY_API_URL,
  CATALOG_PRODUCTS_EMPTY_RESPONSE,
} from "../constants/products.constants";
import { buildCatalogProductsPageSearchParamsHelper } from "../helpers/build-catalog-products-page-search-params";
import type { CatalogProductsQuery, ProductListResponse } from "../types/products.types";

export const getCatalogProductsByCategory = async (
  categoryId: string,
  query: CatalogProductsQuery
): Promise<ProductListResponse> => {
  return fetchApiOrFallback(
    CATALOG_PRODUCTS_BY_CATEGORY_API_URL(
      categoryId,
      buildCatalogProductsPageSearchParamsHelper(query)
    ),
    { next: { revalidate: API_DEFAULT_REVALIDATE_SECONDS } },
    CATALOG_PRODUCTS_EMPTY_RESPONSE
  );
};
