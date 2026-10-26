import { PRODUCT_BY_SLUG_API_URL } from "../constants/products.constants";
import type { ProductDetails } from "../types/products.types";

/** Resolves to `null` for a missing, draft or foreign product, so the page can 404 on all of them. */
export const getProductBySlug = async (slug: string): Promise<ProductDetails | null> => {
  try {
    const response = await fetch(PRODUCT_BY_SLUG_API_URL(slug), { next: { revalidate: 300 } });

    if (!response.ok) return null;

    return await response.json();
  } catch {
    return null;
  }
};
