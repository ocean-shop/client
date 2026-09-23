import {
  CATALOG_PRODUCTS_ATTRIBUTE_NAME_SEPARATOR,
  CATALOG_PRODUCTS_ATTRIBUTE_VALUE_SEPARATOR,
  CATALOG_PRODUCTS_QUERY_PARAM,
} from "../constants/products.constants";
import type { CatalogProductsQuery } from "../types/products.types";

/**
 * Serializes the catalog query the same way for the page URL and for the API request,
 * skipping defaults so a pristine catalog keeps a clean URL.
 */
export function buildCatalogProductsSearchParamsHelper(
  query: CatalogProductsQuery
): URLSearchParams {
  const searchParams = new URLSearchParams();

  for (const attribute of query.attributes) {
    if (attribute.values.length === 0) continue;

    searchParams.append(
      CATALOG_PRODUCTS_QUERY_PARAM.attributes,
      `${attribute.name}${CATALOG_PRODUCTS_ATTRIBUTE_NAME_SEPARATOR}${attribute.values.join(CATALOG_PRODUCTS_ATTRIBUTE_VALUE_SEPARATOR)}`
    );
  }

  if (query.priceFrom !== undefined) {
    searchParams.set(CATALOG_PRODUCTS_QUERY_PARAM.priceFrom, String(query.priceFrom));
  }

  if (query.priceTo !== undefined) {
    searchParams.set(CATALOG_PRODUCTS_QUERY_PARAM.priceTo, String(query.priceTo));
  }

  if (query.available !== undefined) {
    searchParams.set(CATALOG_PRODUCTS_QUERY_PARAM.available, String(query.available));
  }

  if (query.sort) {
    searchParams.set(CATALOG_PRODUCTS_QUERY_PARAM.sort, query.sort);
  }

  if (query.page > 1) {
    searchParams.set(CATALOG_PRODUCTS_QUERY_PARAM.page, String(query.page));
  }

  return searchParams;
}
