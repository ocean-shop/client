import { cache } from "react";
import { PRODUCTS_BY_CATEGORY_API_URL } from "../constants/products.constants";
import type { Product, ProductsByCategoryResponse } from "../types/products.types";

export const getProductsByCategory = cache(async (categoryId: string): Promise<Product[]> => {
  try {
    const response = await fetch(PRODUCTS_BY_CATEGORY_API_URL(categoryId), {
      next: { revalidate: 300 },
    });

    if (!response.ok) return [];

    const { items }: ProductsByCategoryResponse = await response.json();

    return items;
  } catch {
    return [];
  }
});
