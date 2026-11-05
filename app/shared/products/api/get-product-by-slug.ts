import { API_DEFAULT_REVALIDATE_SECONDS } from "@/app/core/api/constants/api.constants";
import { fetchApiOrFallback } from "@/app/core/api/fetch-api-or-fallback";
import { PRODUCT_BY_SLUG_API_URL } from "../constants/products.constants";
import type { ProductDetails } from "../types/products.types";

/** Resolves to `null` for a missing, draft or foreign product, so the page can 404 on all of them. */
export const getProductBySlug = async (slug: string): Promise<ProductDetails | null> => {
  return fetchApiOrFallback<ProductDetails | null>(
    PRODUCT_BY_SLUG_API_URL(slug),
    { next: { revalidate: API_DEFAULT_REVALIDATE_SECONDS } },
    null
  );
};
