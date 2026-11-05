import { findProductVariationHelper } from "./find-product-variation";
import { resolveProductPreviewHelper } from "./resolve-product-preview";
import type { ProductDetails, ProductOffer } from "../types/products.types";

/**
 * Picks the variation to show — the requested one, otherwise the default, otherwise the first —
 * and falls back to the product itself for products that carry no variations at all.
 */
export const resolveProductOfferHelper = (
  product: ProductDetails,
  variationId?: string
): ProductOffer => {
  const variation = findProductVariationHelper(product.variations, variationId);
  const preview = resolveProductPreviewHelper(product, variation?.id);

  return {
    ...preview,
    id: variation?.id ?? product.id,
    sku: variation?.sku ?? product.sku,
    available: variation?.available ?? product.available,
  };
};
