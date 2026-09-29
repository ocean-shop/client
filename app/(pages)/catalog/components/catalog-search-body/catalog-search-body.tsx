import { CatalogGrid } from "@/app/components/catalog-grid/catalog-grid";
import { Breadcrumb } from "@/app/ui/breadcrumb/breadcrumb";
import { countCatalogActiveFiltersHelper } from "@/app/shared/products/helpers/count-catalog-active-filters";
import { CatalogPagination } from "../catalog-pagination/catalog-pagination";
import { CatalogResults } from "../catalog-results/catalog-results";
import { CatalogSortSelect } from "../catalog-sort-select/catalog-sort-select";
import {
  CATALOG_HOME_BREADCRUMB_ITEM,
  CATALOG_NO_MATCHES_MESSAGE,
  CATALOG_PRODUCTS_LABEL,
} from "../../constants/catalog.constants";
import {
  CATALOG_SEARCH_BODY_BREADCRUMB_LABEL,
  CATALOG_SEARCH_BODY_EMPTY_MESSAGE,
  CATALOG_SEARCH_BODY_TITLE,
} from "./constants/catalog-search-body.constants";
import type { CatalogSearchBodyProps } from "./types/catalog-search-body.types";

/** The category listing's counterpart for a search term: same grid, sorting and pagination. */
export function CatalogSearchBody({ query, searchTerm, productList }: CatalogSearchBodyProps) {
  const breadcrumbItems = [
    CATALOG_HOME_BREADCRUMB_ITEM,
    { label: CATALOG_SEARCH_BODY_BREADCRUMB_LABEL },
  ];

  /** Nothing found tells two different stories depending on whether filters narrowed it down. */
  const emptyMessage =
    countCatalogActiveFiltersHelper(query) > 0
      ? CATALOG_NO_MATCHES_MESSAGE
      : CATALOG_SEARCH_BODY_EMPTY_MESSAGE(searchTerm);

  return (
    <div className="flex flex-col">
      <div className="flex items-end justify-between gap-6 pb-5">
        <div className="flex flex-col gap-2">
          <Breadcrumb items={breadcrumbItems} />

          <div className="flex items-baseline gap-3">
            <h1 className="font-heading text-[28px] font-semibold tracking-[-.025em] text-foreground">
              {CATALOG_SEARCH_BODY_TITLE(searchTerm)}
            </h1>
            <span className="text-sm text-muted-light">
              {productList.total.toLocaleString("uk-UA")} {CATALOG_PRODUCTS_LABEL}
            </span>
          </div>
        </div>

        <div className="hidden lg:block">
          <CatalogSortSelect query={query} />
        </div>
      </div>

      <CatalogResults productCount={productList.items.length}>
        <CatalogGrid products={productList.items} emptyMessage={emptyMessage} />
      </CatalogResults>

      <CatalogPagination query={query} totalPages={productList.totalPages} />
    </div>
  );
}
