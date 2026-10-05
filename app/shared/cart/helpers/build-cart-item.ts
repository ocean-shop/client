import type { ProductDetails, ProductOffer } from "@/app/shared/products/types/products.types";
import type { CartItemInput } from "../types/cart.types";

/** Snapshots the offer being bought, so the cart line keeps the variation the visitor picked. */
export function buildCartItemHelper(product: ProductDetails, offer: ProductOffer): CartItemInput {
  const variation = product.variations.find((item) => item.id === offer.id);

  return {
    id: offer.id,
    productId: product.id,
    name: product.name,
    variationLabel: variation ? (variation.title ?? variation.name) : null,
    sku: offer.sku,
    image: offer.images[0]?.url ?? null,
    price: offer.price,
    oldPrice: offer.oldPrice,
  };
}
