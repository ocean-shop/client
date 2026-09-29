import type { ProductDetails, ProductOffer } from "../types/products.types";

/**
 * Picks the variation to show — the requested one, otherwise the default, otherwise the first —
 * and falls back to the product itself for products that carry no variations at all.
 */
export function resolveProductOfferHelper(
  product: ProductDetails,
  variationId?: string
): ProductOffer {
  const variation =
    product.variations.find((item) => item.id === variationId) ??
    product.variations.find((item) => item.isDefault) ??
    product.variations[0];

  if (!variation) {
    return {
      id: product.id,
      sku: product.sku,
      price: product.price,
      oldPrice: product.oldPrice,
      available: product.available,
      images: product.images,
    };
  }

  return {
    id: variation.id,
    sku: variation.sku ?? product.sku,
    price: variation.price,
    oldPrice: variation.oldPrice,
    available: variation.available,
    // A variation without its own shots reuses the product gallery instead of showing nothing.
    images: variation.images.length > 0 ? variation.images : product.images,
  };
}
