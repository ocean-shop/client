import { PRODUCT_CATEGORY_SEARCH_PARAM, PRODUCT_PAGE_PATH } from "../constants/products.constants";

/**
 * The product endpoint returns no categories, so the category the visitor came from rides along
 * in the query string and lets the product page draw the full breadcrumb trail.
 */
export function buildProductHrefHelper(productId: string, categorySlug?: string): string {
  const path = `${PRODUCT_PAGE_PATH}/${productId}`;

  if (!categorySlug) return path;

  return `${path}?${PRODUCT_CATEGORY_SEARCH_PARAM}=${encodeURIComponent(categorySlug)}`;
}
