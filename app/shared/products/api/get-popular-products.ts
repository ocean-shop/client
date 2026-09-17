import { cache } from "react";
import { POPULAR_PRODUCTS_API_URL } from "../constants/products.constants";
import type { Product } from "../types/products.types";

export const getPopularProducts = cache(async (): Promise<Product[]> => {
  try {
    const response = await fetch(POPULAR_PRODUCTS_API_URL, {
      next: { revalidate: 300 },
    });

    if (!response.ok) return [];

    return await response.json();
  } catch {
    return [];
  }
});
