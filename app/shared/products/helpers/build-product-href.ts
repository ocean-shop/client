import { PRODUCT_CATEGORY_SEARCH_PARAM, PRODUCT_PAGE_PATH } from "../constants/products.constants";

/**
 * The product endpoint returns no categories, so the category the visitor came from rides along
 * in the query string and lets the product page draw the full breadcrumb trail.
 *
 * `productSlug` may also be a product id where no slug is known: the page redirects it.
 */
export const buildProductHrefHelper = (productSlug: string, categorySlug?: string): string => {
  const path = `${PRODUCT_PAGE_PATH}/${productSlug}`;

  if (!categorySlug) return path;

  return `${path}?${PRODUCT_CATEGORY_SEARCH_PARAM}=${encodeURIComponent(categorySlug)}`;
};
