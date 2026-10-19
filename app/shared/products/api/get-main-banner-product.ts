import { cache } from "react";
import { MAIN_BANNER_PRODUCT_API_URL } from "../constants/products.constants";
import type { ProductDetails } from "../types/products.types";

/** Resolves to `null` when the shop has no active main banner product, so the hero can skip its link. */
export const getMainBannerProduct = cache(async (): Promise<ProductDetails | null> => {
  try {
    const response = await fetch(MAIN_BANNER_PRODUCT_API_URL, {
      next: { revalidate: 300 },
    });

    if (!response.ok) return null;

    return (await response.json()) ?? null;
  } catch {
    return null;
  }
});
