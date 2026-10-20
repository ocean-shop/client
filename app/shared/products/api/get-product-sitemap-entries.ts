import { PRODUCT_SITEMAP_API_URL } from "../constants/products.constants";
import type { ProductSitemapEntry } from "../types/products.types";

/** Resolves to an empty list on failure, so the sitemap still lists the pages it knows without the API. */
export const getProductSitemapEntries = async (): Promise<ProductSitemapEntry[]> => {
  try {
    const response = await fetch(PRODUCT_SITEMAP_API_URL, { next: { revalidate: 3600 } });

    if (!response.ok) return [];

    return await response.json();
  } catch {
    return [];
  }
};
