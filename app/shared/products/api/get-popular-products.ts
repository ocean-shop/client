import { cache } from "react";
import { API_DEFAULT_REVALIDATE_SECONDS } from "@/app/core/api/constants/api.constants";
import { fetchApiOrFallback } from "@/app/core/api/fetch-api-or-fallback";
import { POPULAR_PRODUCTS_API_URL } from "../constants/products.constants";
import type { Product } from "../types/products.types";

export const getPopularProducts = cache(async (): Promise<Product[]> => {
  return fetchApiOrFallback<Product[]>(
    POPULAR_PRODUCTS_API_URL,
    { next: { revalidate: API_DEFAULT_REVALIDATE_SECONDS } },
    []
  );
});
