import { findProductVariationHelper } from "./find-product-variation";
import type { Product, ProductPreview } from "../types/products.types";

/**
 * Price and photos a listing shows for a product: those of the variation its page opens on,
 * since a variable product keeps a zero price and often no photos of its own.
 */
export const resolveProductPreviewHelper = (
  product: Product,
  variationId?: string
): ProductPreview => {
  const variation = findProductVariationHelper(product.variations, variationId);

  if (!variation) {
    return { price: product.price, oldPrice: product.oldPrice, images: product.images };
  }

  return {
    price: variation.price,
    oldPrice: variation.oldPrice,
    // A variation without its own shots reuses the product gallery instead of showing nothing.
    images: variation.images.length > 0 ? variation.images : product.images,
  };
};
