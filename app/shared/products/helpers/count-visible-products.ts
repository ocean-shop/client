import type { Product } from "../types/products.types";

export function countVisibleProductsHelper(products: Product[]): number {
  return products.filter((product) => product.images.length > 0).length;
}
