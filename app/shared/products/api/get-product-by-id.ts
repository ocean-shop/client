import { PRODUCT_BY_ID_API_URL } from "../constants/products.constants";
import type { ProductDetails } from "../types/products.types";

/**
 * Resolves to `null` for a missing, draft or foreign product, and for a `productId` the endpoint
 * rejects as a non-uuid, so the page can turn every one of those into a single 404.
 */
export async function getProductById(productId: string): Promise<ProductDetails | null> {
  try {
    const response = await fetch(PRODUCT_BY_ID_API_URL(productId), { next: { revalidate: 300 } });

    if (!response.ok) return null;

    return await response.json();
  } catch {
    return null;
  }
}
