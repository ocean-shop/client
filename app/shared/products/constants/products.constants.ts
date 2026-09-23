import type { SelectOption } from "@/app/ui/select/types/select.types";
import type { CatalogProductSort, ProductListResponse } from "../types/products.types";

export const POPULAR_PRODUCTS_API_URL = `${process.env.API_BASE_URL}/catalog/products-client/popular?shopId=${process.env.SHOP_ID}`;

export const CATALOG_PRODUCTS_BY_CATEGORY_API_URL = (categoryId: string, searchParams: string) =>
  `${process.env.API_BASE_URL}/catalog/products-client/by-category/${categoryId}?${searchParams}`;

export const CATALOG_FILTERS_BY_CATEGORY_API_URL = (categoryId: string) =>
  `${process.env.API_BASE_URL}/catalog/products-client/filters/by-category/${categoryId}`;

export const PRODUCT_CARD_DEFAULT_CTA_LABEL = "Додати в кошик";

export const CATALOG_PRODUCTS_PAGE_SIZE = 20;

export const CATALOG_PRODUCTS_LOCALE = "uk-UA";

/** Counting only reads `total`, so the smallest page keeps the response tiny. */
export const CATALOG_PRODUCTS_COUNT_LIMIT = 1;

/** Ukrainian needs three forms: 1 товар, 3 товари, 9 товарів. */
export const CATALOG_PRODUCTS_WORD_FORMS: Partial<Record<Intl.LDMLPluralRule, string>> = {
  one: "товар",
  few: "товари",
  many: "товарів",
  other: "товарів",
};

/** Query string keys shared by the page URL and the catalog products endpoint. */
export const CATALOG_PRODUCTS_QUERY_PARAM = {
  page: "page",
  limit: "limit",
  attributes: "attributes",
  priceFrom: "priceFrom",
  priceTo: "priceTo",
  available: "available",
  sort: "sort",
} as const;

/** `name:value1,value2` is the attribute filter format expected by the endpoint. */
export const CATALOG_PRODUCTS_ATTRIBUTE_NAME_SEPARATOR = ":";
export const CATALOG_PRODUCTS_ATTRIBUTE_VALUE_SEPARATOR = ",";
export const CATALOG_PRODUCTS_ATTRIBUTE_GROUP_SEPARATOR = ";";

export const CATALOG_PRODUCT_SORTS: CatalogProductSort[] = [
  "popular",
  "cheaper",
  "expensive",
  "new",
];

export const CATALOG_PRODUCT_SORT_OPTIONS: SelectOption[] = [
  { id: "popular", label: "За популярністю" },
  { id: "cheaper", label: "Спочатку дешевші" },
  { id: "expensive", label: "Спочатку дорожчі" },
  { id: "new", label: "Новинки" },
];

export const CATALOG_PRODUCTS_DEFAULT_SORT: CatalogProductSort = "popular";

export const CATALOG_PRODUCTS_EMPTY_RESPONSE: ProductListResponse = {
  items: [],
  total: 0,
  page: 1,
  limit: CATALOG_PRODUCTS_PAGE_SIZE,
  totalPages: 0,
};
