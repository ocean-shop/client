import { notFound } from "next/navigation";
import { getCatalogCategories } from "@/app/shared/catalog-categories/api/get-catalog-categories";
import { findCatalogCategoryBySlugHelper } from "@/app/shared/catalog-categories/helpers/find-catalog-category-by-slug";
import { getCatalogFiltersByCategory } from "@/app/shared/products/api/get-catalog-filters-by-category";
import { getProductsByCategory } from "@/app/shared/products/api/get-products-by-category";
import { countVisibleProductsHelper } from "@/app/shared/products/helpers/count-visible-products";
import { CatalogFilters } from "../components/catalog-filters/catalog-filters";
import { mapCatalogFiltersToGroupsHelper } from "../components/catalog-filters/helpers/map-catalog-filters-to-groups";
import { CatalogBody } from "../components/catalog-body/catalog-body";
import { CatalogToolbar } from "../components/catalog-toolbar/catalog-toolbar";
import { CATALOG_BODY_SORT_OPTIONS } from "../components/catalog-body/constants/catalog-body.constants";

export default async function CatalogPage({ params }: PageProps<"/catalog/[categoryName]">) {
  const { categoryName } = await params;
  const categories = await getCatalogCategories();
  const category = findCatalogCategoryBySlugHelper(categories, categoryName);

  if (!category) notFound();

  const [products, filters] = await Promise.all([
    getProductsByCategory(category.id),
    getCatalogFiltersByCategory(category.id),
  ]);

  const resultsCount = countVisibleProductsHelper(products);
  const filterGroups = mapCatalogFiltersToGroupsHelper(filters);

  return (
    <div className="bg-surface-soft">
      <CatalogToolbar
        sortOptions={CATALOG_BODY_SORT_OPTIONS}
        resultsCount={resultsCount}
        filterGroups={filterGroups}
      />

      <div className="mx-auto grid max-w-page items-start gap-8 px-4.5 pb-14 pt-4 lg:grid-cols-[284px_1fr] lg:px-10 lg:pt-6.5">
        <div className="hidden lg:block">
          <CatalogFilters groups={filterGroups} />
        </div>
        <CatalogBody category={category} />
      </div>
    </div>
  );
}
