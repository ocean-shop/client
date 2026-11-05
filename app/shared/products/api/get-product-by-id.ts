import { API_DEFAULT_REVALIDATE_SECONDS } from "@/app/core/api/constants/api.constants";
import { fetchApiOrFallback } from "@/app/core/api/fetch-api-or-fallback";
import { PRODUCT_BY_ID_API_URL } from "../constants/products.constants";
import type { ProductDetails } from "../types/products.types";

/**
 * Resolves to `null` for a missing, draft or foreign product, and for a `productId` the endpoint
 * rejects as a non-uuid, so the page can turn every one of those into a single 404.
 */
export const getProductById = async (productId: string): Promise<ProductDetails | null> => {
  return fetchApiOrFallback<ProductDetails | null>(
    PRODUCT_BY_ID_API_URL(productId),
    { next: { revalidate: API_DEFAULT_REVALIDATE_SECONDS } },
    null
  );
};
