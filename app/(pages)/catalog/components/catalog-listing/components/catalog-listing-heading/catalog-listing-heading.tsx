import { formatProductsCountHelper } from "@/app/shared/products/helpers/format-products-count";
import { Breadcrumb } from "@/app/ui/breadcrumb/breadcrumb";
import { CatalogSortSelect } from "./components/catalog-sort-select/catalog-sort-select";
import type { CatalogListingHeadingProps } from "./types/catalog-listing-heading.types";

export const CatalogListingHeading = ({
  title,
  breadcrumbItems,
  total,
  query,
  isSortVisible = true,
}: CatalogListingHeadingProps) => {
  return (
    <div className="flex items-end justify-between gap-6 pb-5">
      <div className="flex flex-col gap-2">
        <Breadcrumb items={breadcrumbItems} />

        <div className="flex items-baseline gap-3">
          <h1 className="font-heading text-[28px] font-semibold tracking-[-.025em] text-foreground">
            {title}
          </h1>
          <span className="text-sm text-muted-light">{formatProductsCountHelper(total)}</span>
        </div>
      </div>

      {isSortVisible && (
        <div className="hidden lg:block">
          <CatalogSortSelect query={query} />
        </div>
      )}
    </div>
  );
};
