import { getProductById } from "@/app/shared/products/api/get-product-by-id";
import { getProductBySlug } from "@/app/shared/products/api/get-product-by-slug";
import { PRODUCT_ID_PATTERN } from "@/app/shared/products/constants/products.constants";
import type { ProductDetails } from "@/app/shared/products/types/products.types";

/**
 * The route segment is a slug, except on links from before slugs (old bookmarks, carts saved in
 * the browser, order history), which carry the product id. Both resolve to the same product so
 * the page can redirect the latter to its slug URL.
 */
export const getProductByRouteParamHelper = (param: string): Promise<ProductDetails | null> => {
  return PRODUCT_ID_PATTERN.test(param) ? getProductById(param) : getProductBySlug(param);
};
