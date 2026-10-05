import type { SelectOption } from "@/app/ui/select/types/select.types";
import type {
  CatalogProductSort,
  ProductListResponse,
  ProductSearchListResponse,
  ProductSearchResponse,
} from "../types/products.types";

export const SHOP_ID_QUERY_PARAM = "shopId";

/** Every catalog endpoint is scoped to this storefront, so `shopId` rides along with the query. */
const withShopId = (searchParams?: string) => {
  const params = new URLSearchParams(searchParams);

  if (process.env.SHOP_ID) params.set(SHOP_ID_QUERY_PARAM, process.env.SHOP_ID);

  return params.toString();
};

export const POPULAR_PRODUCTS_API_URL = `${process.env.API_BASE_URL}/catalog/products-client/popular?${withShopId()}`;

export const CATALOG_PRODUCTS_BY_CATEGORY_API_URL = (categoryId: string, searchParams: string) =>
  `${process.env.API_BASE_URL}/catalog/products-client/by-category/${categoryId}?${withShopId(searchParams)}`;

export const CATALOG_PRODUCTS_BY_SEARCH_API_URL = (searchParams: string) =>
  `${process.env.API_BASE_URL}/catalog/products-client/by-search?${withShopId(searchParams)}`;

/** Suggestions for the header search field: a short, most-relevant slice plus the full total. */
export const PRODUCT_SEARCH_API_URL = (searchParams: string) =>
  `${process.env.API_BASE_URL}/catalog/products-client/search?${withShopId(searchParams)}`;

export const PRODUCT_BY_ID_API_URL = (productId: string) =>
  `${process.env.API_BASE_URL}/catalog/products-client/${productId}?${withShopId()}`;

export const CATALOG_FILTERS_BY_CATEGORY_API_URL = (categoryId: string) =>
  `${process.env.API_BASE_URL}/catalog/products-client/filters/by-category/${categoryId}?${withShopId()}`;

export const PRODUCT_PAGE_PATH = "/product";

export const CATALOG_SEARCH_PAGE_PATH = "/catalog/search";

/**
 * The endpoint accepts a single character, but the panel waits for two so the first keystroke
 * never fires a request of its own.
 */
export const PRODUCT_SEARCH_TERM_MIN_LENGTH = 2;

/** Mirrors the endpoint's own limit, so an over-long term never reaches it. */
export const PRODUCT_SEARCH_TERM_MAX_LENGTH = 100;

/** Carries the catalog category a product was opened from, purely to rebuild its breadcrumbs. */
export const PRODUCT_CATEGORY_SEARCH_PARAM = "category";

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
  query: "query",
  page: "page",
  limit: "limit",
  attributes: "attributes",
  categoryIds: "categoryIds",
  priceFrom: "priceFrom",
  priceTo: "priceTo",
  available: "available",
  sort: "sort",
} as const;

/** `name:value1,value2` is the attribute filter format expected by the endpoint. */
export const CATALOG_PRODUCTS_ATTRIBUTE_NAME_SEPARATOR = ":";
export const CATALOG_PRODUCTS_ATTRIBUTE_VALUE_SEPARATOR = ",";
export const CATALOG_PRODUCTS_ATTRIBUTE_GROUP_SEPARATOR = ";";

/** The selected categories travel as one `categoryIds=id1,id2` parameter. */
export const CATALOG_PRODUCTS_CATEGORY_ID_SEPARATOR = ",";

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

export const CATALOG_PRODUCTS_SEARCH_EMPTY_RESPONSE: ProductSearchListResponse = {
  ...CATALOG_PRODUCTS_EMPTY_RESPONSE,
  filters: [],
  categories: [],
};

export const PRODUCT_SEARCH_EMPTY_RESPONSE: ProductSearchResponse = {
  total: 0,
  items: [],
};
