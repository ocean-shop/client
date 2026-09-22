import { CatalogGrid } from "@/app/components/catalog-grid/catalog-grid";
import { Breadcrumb } from "@/app/ui/breadcrumb/breadcrumb";
import { Select } from "@/app/ui/select/select";
import { Pagination } from "@/app/ui/pagination/pagination";
import { getCatalogCategories } from "@/app/shared/catalog-categories/api/get-catalog-categories";
import { getCatalogCategoryAncestorsHelper } from "@/app/shared/catalog-categories/helpers/get-catalog-category-ancestors";
import { getProductsByCategory } from "@/app/shared/products/api/get-products-by-category";
import { countVisibleProductsHelper } from "@/app/shared/products/helpers/count-visible-products";
import {
  CATALOG_BODY_HOME_BREADCRUMB_ITEM,
  CATALOG_BODY_PRODUCTS_PER_PAGE,
  CATALOG_BODY_SORT_LABEL,
  CATALOG_BODY_SORT_OPTIONS,
} from "./constants/catalog-body.constants";
import type { CatalogBodyProps } from "./types/catalog-body.types";

export async function CatalogBody({ category }: CatalogBodyProps) {
  const [categories, products] = await Promise.all([
    getCatalogCategories(),
    getProductsByCategory(category.id),
  ]);

  const ancestors = getCatalogCategoryAncestorsHelper(categories, category);
  const breadcrumbItems = [
    CATALOG_BODY_HOME_BREADCRUMB_ITEM,
    ...ancestors.map((ancestor) => ({ label: ancestor.name, href: `/catalog/${ancestor.slug}` })),
    { label: category.name },
  ];

  const productsCount = countVisibleProductsHelper(products);
  const totalPages = Math.max(1, Math.ceil(productsCount / CATALOG_BODY_PRODUCTS_PER_PAGE));

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
              {productsCount.toLocaleString("uk-UA")} товарів
            </span>
          </div>
        </div>

        <div className="hidden lg:block">
          <Select label={CATALOG_BODY_SORT_LABEL} options={CATALOG_BODY_SORT_OPTIONS} />
        </div>
      </div>

      <CatalogGrid category={category} />

      <Pagination totalPages={totalPages} />
    </div>
  );
}
