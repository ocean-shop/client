import { getFirstSearchParamValue } from "@/app/core/search-params/helpers/get-first-search-param-value";
import type { SearchParamValue } from "@/app/core/search-params/types/search-params.types";
import {
  CATALOG_PRODUCTS_QUERY_PARAM,
  CATALOG_PRODUCT_SORTS,
  PRODUCT_SEARCH_TERM_MAX_LENGTH,
} from "../constants/products.constants";
import type {
  CatalogProductSort,
  CatalogProductsQuery,
  CatalogProductsSearchParams,
} from "../types/products.types";
import { parseCatalogAttributesHelper } from "./parse-catalog-attributes";
import { parseCatalogCategoryIdsHelper } from "./parse-catalog-category-ids";

const parsePage = (value: SearchParamValue): number => {
  const page = Number(getFirstSearchParamValue(value));

  return Number.isInteger(page) && page > 0 ? page : 1;
};

const parsePrice = (value: SearchParamValue): number | undefined => {
  const raw = getFirstSearchParamValue(value);
  if (!raw) return undefined;

  const price = Number(raw);

  return Number.isFinite(price) && price >= 0 ? price : undefined;
};

const parseSort = (value: SearchParamValue): CatalogProductSort | undefined => {
  const raw = getFirstSearchParamValue(value);

  return CATALOG_PRODUCT_SORTS.find((sort) => sort === raw);
};

const parseAvailable = (value: SearchParamValue): boolean | undefined => {
  const raw = getFirstSearchParamValue(value);
  if (raw === "true") return true;
  if (raw === "false") return false;

  return undefined;
};

/** Collapses whitespace and clips the term, matching what the endpoint accepts. */
const parseSearchTerm = (value: SearchParamValue): string | undefined => {
  const term = getFirstSearchParamValue(value)?.replace(/\s+/g, " ").trim();

  return term ? term.slice(0, PRODUCT_SEARCH_TERM_MAX_LENGTH) : undefined;
};

export const parseCatalogProductsQueryHelper = (
  searchParams: CatalogProductsSearchParams
): CatalogProductsQuery => {
  return {
    page: parsePage(searchParams[CATALOG_PRODUCTS_QUERY_PARAM.page]),
    attributes: parseCatalogAttributesHelper(searchParams[CATALOG_PRODUCTS_QUERY_PARAM.attributes]),
    categoryIds: parseCatalogCategoryIdsHelper(
      searchParams[CATALOG_PRODUCTS_QUERY_PARAM.categoryIds]
    ),
    sort: parseSort(searchParams[CATALOG_PRODUCTS_QUERY_PARAM.sort]),
    priceFrom: parsePrice(searchParams[CATALOG_PRODUCTS_QUERY_PARAM.priceFrom]),
    priceTo: parsePrice(searchParams[CATALOG_PRODUCTS_QUERY_PARAM.priceTo]),
    available: parseAvailable(searchParams[CATALOG_PRODUCTS_QUERY_PARAM.available]),
    searchTerm: parseSearchTerm(searchParams[CATALOG_PRODUCTS_QUERY_PARAM.query]),
  };
};
