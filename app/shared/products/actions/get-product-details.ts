"use server";

import { getProductById } from "../api/get-product-by-id";
import type { ProductDetails } from "../types/products.types";

/**
 * Listing cards carry no variations, so adding from a card asks for the full product first to
 * know which offer to put in the cart. Runs as an action because `API_BASE_URL` is server-only.
 */
export async function getProductDetailsAction(productId: string): Promise<ProductDetails | null> {
  return getProductById(productId);
}
