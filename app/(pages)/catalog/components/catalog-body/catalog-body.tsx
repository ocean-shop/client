import { CatalogGrid } from "@/app/components/catalog-grid/catalog-grid";
import { Breadcrumb } from "@/app/ui/breadcrumb/breadcrumb";
import { getCatalogCategories } from "@/app/shared/catalog-categories/api/get-catalog-categories";
import { getCatalogCategoryAncestorsHelper } from "@/app/shared/catalog-categories/helpers/get-catalog-category-ancestors";
import { countCatalogActiveFiltersHelper } from "@/app/shared/products/helpers/count-catalog-active-filters";
import { CatalogPagination } from "./components/catalog-pagination/catalog-pagination";
import { CatalogResults } from "./components/catalog-results/catalog-results";
import { CatalogSortSelect } from "./components/catalog-sort-select/catalog-sort-select";
import { CatalogSubCategories } from "./components/catalog-sub-categories/catalog-sub-categories";
import {
  CATALOG_BODY_HOME_BREADCRUMB_ITEM,
  CATALOG_BODY_NO_MATCHES_MESSAGE,
  CATALOG_BODY_PRODUCTS_LABEL,
} from "./constants/catalog-body.constants";
import type { CatalogBodyProps } from "./types/catalog-body.types";

export async function CatalogBody({ category, query, productList }: CatalogBodyProps) {
  const categories = await getCatalogCategories();

  const ancestors = getCatalogCategoryAncestorsHelper(categories, category);
  const breadcrumbItems = [
    CATALOG_BODY_HOME_BREADCRUMB_ITEM,
    ...ancestors.map((ancestor) => ({ label: ancestor.name, href: `/catalog/${ancestor.slug}` })),
    { label: category.name },
  ];

  const hasActiveFilters = countCatalogActiveFiltersHelper(query) > 0;

  return (
    <div className="flex flex-col">
      <div className="flex items-end justify-between gap-6 pb-5">
        <div className="flex flex-col gap-2">
          <Breadcrumb items={breadcrumbItems} />

          <div className="flex items-baseline gap-3">
            <h1 className="font-heading text-[28px] font-semibold tracking-[-.025em] text-foreground">
              {category.name}
            </h1>
            <span className="text-sm text-muted-light">
              {productList.total.toLocaleString("uk-UA")} {CATALOG_BODY_PRODUCTS_LABEL}
            </span>
          </div>
        </div>

        <div className="hidden lg:block">
          <CatalogSortSelect query={query} />
        </div>
      </div>

      <CatalogSubCategories parentId={category.id} />

      <CatalogResults productCount={productList.items.length}>
        <CatalogGrid
          products={productList.items}
          emptyMessage={hasActiveFilters ? CATALOG_BODY_NO_MATCHES_MESSAGE : undefined}
        />
      </CatalogResults>

      <CatalogPagination query={query} totalPages={productList.totalPages} />
    </div>
  );
}
