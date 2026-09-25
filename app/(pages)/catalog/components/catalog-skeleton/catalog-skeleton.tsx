import { CatalogGridSkeleton } from "@/app/components/catalog-grid/components/catalog-grid-skeleton/catalog-grid-skeleton";
import { NavigationProgressReporter } from "@/app/core/navigation-progress/components/navigation-progress-reporter/navigation-progress-reporter";
import {
  CATALOG_CONTENT_CLASS_NAME,
  CATALOG_PAGE_CLASS_NAME,
  CATALOG_SKELETON_PRODUCT_COUNT,
} from "../../constants/catalog.constants";

/** Stand-in for the whole catalog page while its products and filters are still on the server. */
export function CatalogSkeleton() {
  return (
    <div className={CATALOG_PAGE_CLASS_NAME}>
      <NavigationProgressReporter />

      <div className="sticky top-[var(--mobile-header-height)] z-20 flex gap-2.5 border-t border-border-soft bg-background px-4.5 py-2.5 lg:hidden">
        <div className="h-11 flex-1 animate-pulse rounded-xl bg-surface-strong" />
        <div className="h-11 flex-1 animate-pulse rounded-xl bg-surface-strong" />
      </div>

      <div className={CATALOG_CONTENT_CLASS_NAME}>
        <div className="hidden animate-pulse flex-col gap-3.5 lg:flex">
          <div className="h-[164px] rounded-2xl bg-background" />
          <div className="h-[108px] rounded-2xl bg-background" />
          <div className="h-[196px] rounded-2xl bg-background" />
        </div>

        <div className="flex flex-col">
          <div className="flex animate-pulse flex-col gap-2.5 pb-5">
            <div className="h-[13px] w-44 rounded bg-surface-strong" />
            <div className="h-[30px] w-56 rounded bg-surface-strong" />
          </div>

          <CatalogGridSkeleton count={CATALOG_SKELETON_PRODUCT_COUNT} />
        </div>
      </div>
    </div>
  );
}
