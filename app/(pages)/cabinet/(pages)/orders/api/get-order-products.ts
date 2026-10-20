import { getProductById } from "@/app/shared/products/api/get-product-by-id";
import type { ProductDetails } from "@/app/shared/products/types/products.types";
import type { UserOrder } from "../types/orders.types";

/**
 * The orders endpoint carries no photos, so every product on the page is looked up in the
 * catalog once. Those requests are cached, and a product that is gone simply has no entry.
 */
export const getOrderProducts = async (
  orders: UserOrder[]
): Promise<Map<string, ProductDetails>> => {
  const productIds = Array.from(
    new Set(orders.flatMap((order) => order.items.map((item) => item.productId)))
  );
  const products = await Promise.all(productIds.map(getProductById));

  return new Map(products.flatMap((product) => (product ? [[product.id, product] as const] : [])));
};
