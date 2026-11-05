import { cache } from "react";
import { API_DEFAULT_REVALIDATE_SECONDS } from "@/app/core/api/constants/api.constants";
import { fetchApiOrFallback } from "@/app/core/api/fetch-api-or-fallback";
import { MAIN_BANNER_PRODUCT_API_URL } from "../constants/products.constants";
import type { ProductDetails } from "../types/products.types";

/** Resolves to `null` when the shop has no active main banner product, so the hero can skip its link. */
export const getMainBannerProduct = cache(async (): Promise<ProductDetails | null> => {
  return fetchApiOrFallback<ProductDetails | null>(
    MAIN_BANNER_PRODUCT_API_URL,
    { next: { revalidate: API_DEFAULT_REVALIDATE_SECONDS } },
    null
  );
});
