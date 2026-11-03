import { fetchApiOrFallback } from "@/app/core/api/fetch-api-or-fallback";
import {
  PRODUCT_SITEMAP_API_URL,
  PRODUCT_SITEMAP_REVALIDATE_SECONDS,
} from "../constants/products.constants";
import type { ProductSitemapEntry } from "../types/products.types";

/** Resolves to an empty list on failure, so the sitemap still lists the pages it knows without the API. */
export const getProductSitemapEntries = async (): Promise<ProductSitemapEntry[]> => {
  return fetchApiOrFallback<ProductSitemapEntry[]>(
    PRODUCT_SITEMAP_API_URL,
    { next: { revalidate: PRODUCT_SITEMAP_REVALIDATE_SECONDS } },
    []
  );
};
