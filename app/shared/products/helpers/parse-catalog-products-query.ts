import {
  CATALOG_PRODUCTS_ATTRIBUTE_GROUP_SEPARATOR,
  CATALOG_PRODUCTS_ATTRIBUTE_NAME_SEPARATOR,
  CATALOG_PRODUCTS_ATTRIBUTE_VALUE_SEPARATOR,
  CATALOG_PRODUCTS_QUERY_PARAM,
  CATALOG_PRODUCT_SORTS,
} from "../constants/products.constants";
import type {
  CatalogFilter,
  CatalogProductSort,
  CatalogProductsQuery,
  CatalogProductsSearchParams,
} from "../types/products.types";

type SearchParamValue = string | string[] | undefined;

function toListHelper(value: SearchParamValue): string[] {
  if (value === undefined) return [];

  return Array.isArray(value) ? value : [value];
}

function firstValueHelper(value: SearchParamValue): string | undefined {
  return toListHelper(value)[0];
}

function parsePageHelper(value: SearchParamValue): number {
  const page = Number(firstValueHelper(value));

  return Number.isInteger(page) && page > 0 ? page : 1;
}

function parsePriceHelper(value: SearchParamValue): number | undefined {
  const raw = firstValueHelper(value);
  if (!raw) return undefined;

  const price = Number(raw);

  return Number.isFinite(price) && price >= 0 ? price : undefined;
}

function parseSortHelper(value: SearchParamValue): CatalogProductSort | undefined {
  const raw = firstValueHelper(value);

  return CATALOG_PRODUCT_SORTS.find((sort) => sort === raw);
}

function parseAvailableHelper(value: SearchParamValue): boolean | undefined {
  const raw = firstValueHelper(value);
  if (raw === "true") return true;
  if (raw === "false") return false;

  return undefined;
}

/** Reads `attributes=name:value1,value2` entries, repeated or joined with `;`. */
function parseAttributesHelper(value: SearchParamValue): CatalogFilter[] {
  const valuesByName = new Map<string, string[]>();

  for (const entry of toListHelper(value)) {
    for (const group of entry.split(CATALOG_PRODUCTS_ATTRIBUTE_GROUP_SEPARATOR)) {
      const separatorIndex = group.indexOf(CATALOG_PRODUCTS_ATTRIBUTE_NAME_SEPARATOR);
      if (separatorIndex <= 0) continue;

      const name = group.slice(0, separatorIndex).trim();
      const values = group
        .slice(separatorIndex + 1)
        .split(CATALOG_PRODUCTS_ATTRIBUTE_VALUE_SEPARATOR)
        .map((attributeValue) => attributeValue.trim())
        .filter(Boolean);

      if (!name || values.length === 0) continue;

      valuesByName.set(name, [...(valuesByName.get(name) ?? []), ...values]);
    }
  }

  return [...valuesByName].map(([name, values]) => ({ name, values: [...new Set(values)] }));
}

export function parseCatalogProductsQueryHelper(
  searchParams: CatalogProductsSearchParams
): CatalogProductsQuery {
  return {
    page: parsePageHelper(searchParams[CATALOG_PRODUCTS_QUERY_PARAM.page]),
    attributes: parseAttributesHelper(searchParams[CATALOG_PRODUCTS_QUERY_PARAM.attributes]),
    sort: parseSortHelper(searchParams[CATALOG_PRODUCTS_QUERY_PARAM.sort]),
    priceFrom: parsePriceHelper(searchParams[CATALOG_PRODUCTS_QUERY_PARAM.priceFrom]),
    priceTo: parsePriceHelper(searchParams[CATALOG_PRODUCTS_QUERY_PARAM.priceTo]),
    available: parseAvailableHelper(searchParams[CATALOG_PRODUCTS_QUERY_PARAM.available]),
  };
}
