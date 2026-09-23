import { notFound } from "next/navigation";
import { getCatalogCategories } from "@/app/shared/catalog-categories/api/get-catalog-categories";
import { findCatalogCategoryBySlugHelper } from "@/app/shared/catalog-categories/helpers/find-catalog-category-by-slug";
import { getCatalogFiltersByCategory } from "@/app/shared/products/api/get-catalog-filters-by-category";
import { getCatalogProductsByCategory } from "@/app/shared/products/api/get-catalog-products-by-category";
import { parseCatalogProductsQueryHelper } from "@/app/shared/products/helpers/parse-catalog-products-query";
import { CatalogFilters } from "../components/catalog-filters/catalog-filters";
import { mapCatalogFiltersToGroupsHelper } from "../components/catalog-filters/helpers/map-catalog-filters-to-groups";
import { CatalogBody } from "../components/catalog-body/catalog-body";
import { CatalogToolbar } from "../components/catalog-toolbar/catalog-toolbar";
import {
  CATALOG_CONTENT_CLASS_NAME,
  CATALOG_PAGE_CLASS_NAME,
} from "../constants/catalog.constants";

export default async function CatalogPage({
  params,
  searchParams,
}: PageProps<"/catalog/[categoryName]">) {
  const [{ categoryName }, resolvedSearchParams] = await Promise.all([params, searchParams]);
  const categories = await getCatalogCategories();
  const category = findCatalogCategoryBySlugHelper(categories, categoryName);

  if (!category) notFound();

  const query = parseCatalogProductsQueryHelper(resolvedSearchParams);

  const [productList, filters] = await Promise.all([
    getCatalogProductsByCategory(category.id, query),
    getCatalogFiltersByCategory(category.id),
  ]);

  const filterGroups = mapCatalogFiltersToGroupsHelper(filters);

  return (
    <div className={CATALOG_PAGE_CLASS_NAME}>
      <CatalogToolbar
        categoryId={category.id}
        query={query}
        resultsCount={productList.total}
        filterGroups={filterGroups}
      />

      <div className={CATALOG_CONTENT_CLASS_NAME}>
        <div className="hidden lg:block">
          <CatalogFilters groups={filterGroups} query={query} />
        </div>
        <CatalogBody category={category} query={query} productList={productList} />
      </div>
    </div>
  );
}
