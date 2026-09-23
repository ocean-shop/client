"use client";

import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";
import { buildCatalogProductsSearchParamsHelper } from "@/app/shared/products/helpers/build-catalog-products-search-params";
import type { CatalogProductsQuery } from "@/app/shared/products/types/products.types";

/**
 * The URL is the single source of truth for the catalog query: every change is pushed
 * as search params and the page re-renders on the server with fresh products.
 */
export function useCatalogQuery(query: CatalogProductsQuery) {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  /** Merges changes into the current query, resetting to page 1 unless a page is given. */
  function applyQuery(changes: Partial<CatalogProductsQuery>) {
    const searchParams = buildCatalogProductsSearchParamsHelper({
      ...query,
      page: 1,
      ...changes,
    }).toString();

    startTransition(() => router.push(searchParams ? `${pathname}?${searchParams}` : pathname));
  }

  return { applyQuery, isPending };
}
