import type { ProductVariation } from "../types/products.types";

/**
 * The variation a product presents: the requested one, otherwise the default, otherwise the
 * first. `undefined` only for simple products, which carry no variations at all.
 */
export const findProductVariationHelper = (
  variations: ProductVariation[] = [],
  variationId?: string
): ProductVariation | undefined =>
  variations.find((item) => item.id === variationId) ??
  variations.find((item) => item.isDefault) ??
  variations[0];
