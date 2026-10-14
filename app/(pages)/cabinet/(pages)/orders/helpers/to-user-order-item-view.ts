import { buildCartItemHelper } from "@/app/shared/cart/helpers/build-cart-item";
import { buildProductHrefHelper } from "@/app/shared/products/helpers/build-product-href";
import { resolveProductOfferHelper } from "@/app/shared/products/helpers/resolve-product-offer";
import type { ProductDetails } from "@/app/shared/products/types/products.types";
import type { UserOrderItem, UserOrderItemView } from "../types/orders.types";

/**
 * Orders keep no variation, so a repeat buys the product's default offer at today's price.
 * The line itself keeps the price the user actually paid.
 */
export function toUserOrderItemViewHelper(
  item: UserOrderItem,
  product: ProductDetails | undefined
): UserOrderItemView {
  const offer = product ? resolveProductOfferHelper(product) : null;
  const unitPrice = Number(item.unitPrice);

  return {
    id: item.productId,
    name: item.product?.name ?? product?.name ?? "",
    sku: item.product?.sku ?? null,
    image: offer?.images[0]?.url ?? null,
    href: product ? buildProductHrefHelper(product.id) : null,
    quantity: item.quantity,
    unitPrice,
    sum: unitPrice * item.quantity,
    cartItem: product && offer?.available ? buildCartItemHelper(product, offer) : null,
  };
}
