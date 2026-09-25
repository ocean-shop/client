export const CATALOG_PRODUCTS_COUNT_QUERY_KEY = "catalog-products-count";

/** Keeps typing in the price inputs from firing a count request per keystroke. */
export const CATALOG_PRODUCTS_COUNT_DEBOUNCE_MS = 350;

/** Shared by the catalog page and its loading skeleton so the two occupy the same layout. */
export const CATALOG_PAGE_CLASS_NAME = "flex-1 bg-surface-soft";
export const CATALOG_CONTENT_CLASS_NAME =
  "mx-auto grid max-w-page items-start gap-8 px-4.5 pb-14 pt-4 lg:grid-cols-[284px_1fr] lg:px-10 lg:pt-6.5";

/** No query has run yet on first load, so the skeleton fills a plausible first page. */
export const CATALOG_SKELETON_PRODUCT_COUNT = 8;
