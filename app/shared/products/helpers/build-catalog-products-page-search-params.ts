import {
  CATALOG_PRODUCTS_PAGE_SIZE,
  CATALOG_PRODUCTS_QUERY_PARAM,
} from "../constants/products.constants";
import type { CatalogProductsQuery } from "../types/products.types";
import { buildCatalogProductsSearchParamsHelper } from "./build-catalog-products-search-params";

/** The listing request always names its page and size, which the page URL leaves out by default. */
export const buildCatalogProductsPageSearchParamsHelper = (query: CatalogProductsQuery): string => {
  const searchParams = buildCatalogProductsSearchParamsHelper(query);

  searchParams.set(CATALOG_PRODUCTS_QUERY_PARAM.page, String(query.page));
  searchParams.set(CATALOG_PRODUCTS_QUERY_PARAM.limit, String(CATALOG_PRODUCTS_PAGE_SIZE));

  return searchParams.toString();
};
