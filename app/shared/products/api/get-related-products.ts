import { API_DEFAULT_REVALIDATE_SECONDS } from "@/app/core/api/constants/api.constants";
import { fetchApiOrFallback } from "@/app/core/api/fetch-api-or-fallback";
import { RELATED_PRODUCTS_API_URL } from "../constants/products.constants";
import type { Product } from "../types/products.types";

/**
 * The related products shown under a product, in display order. Resolves to an empty list when the
 * product has none or the request fails, so the section simply stays hidden.
 */
export const getRelatedProducts = async (productId: string): Promise<Product[]> => {
  return fetchApiOrFallback<Product[]>(
    RELATED_PRODUCTS_API_URL(productId),
    { next: { revalidate: API_DEFAULT_REVALIDATE_SECONDS } },
    []
  );
};
