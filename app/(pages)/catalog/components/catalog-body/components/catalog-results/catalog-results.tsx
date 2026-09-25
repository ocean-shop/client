"use client";

import { CatalogGridSkeleton } from "@/app/components/catalog-grid/components/catalog-grid-skeleton/catalog-grid-skeleton";
import { useNavigationPendingCount } from "@/app/core/navigation-progress/hooks/use-navigation-pending-count";
import { CATALOG_RESULTS_SKELETON_FALLBACK_COUNT } from "./constants/catalog-results.constants";
import type { CatalogResultsProps } from "./types/catalog-results.types";

/**
 * A catalog query change is a server round trip, so React keeps the old grid on screen until
 * it resolves. Swapping in skeletons while the transition is pending makes the wait legible.
 */
export function CatalogResults({ productCount, children }: CatalogResultsProps) {
  const pendingCount = useNavigationPendingCount();

  if (pendingCount > 0) {
    return <CatalogGridSkeleton count={productCount || CATALOG_RESULTS_SKELETON_FALLBACK_COUNT} />;
  }

  return <>{children}</>;
}
