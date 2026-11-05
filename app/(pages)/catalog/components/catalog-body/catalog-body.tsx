import { JsonLd } from "@/app/ui/json-ld/json-ld";
import { buildBreadcrumbJsonLdHelper } from "@/app/shared/seo/helpers/build-breadcrumb-json-ld";
import { getCatalogCategories } from "@/app/shared/catalog-categories/api/get-catalog-categories";
import { countCatalogActiveFiltersHelper } from "@/app/shared/products/helpers/count-catalog-active-filters";
import { CatalogListing } from "../catalog-listing/catalog-listing";
import { CatalogSubCategories } from "./components/catalog-sub-categories/catalog-sub-categories";
import { CATALOG_NO_MATCHES_MESSAGE } from "../../constants/catalog.constants";
import { buildCatalogBodyBreadcrumbItemsHelper } from "./helpers/build-catalog-body-breadcrumb-items";
import type { CatalogBodyProps } from "./types/catalog-body.types";

export const CatalogBody = async ({ category, query, productList }: CatalogBodyProps) => {
  const categories = await getCatalogCategories();
  const breadcrumbItems = buildCatalogBodyBreadcrumbItemsHelper(categories, category);
  const hasActiveFilters = countCatalogActiveFiltersHelper(query) > 0;

  return (
    <CatalogListing
      title={category.name}
      breadcrumbItems={breadcrumbItems}
      query={query}
      productList={productList}
      emptyMessage={hasActiveFilters ? CATALOG_NO_MATCHES_MESSAGE : undefined}
      categorySlug={category.slug}
    >
      <JsonLd data={buildBreadcrumbJsonLdHelper(breadcrumbItems)} />
      <CatalogSubCategories parentId={category.id} />
    </CatalogListing>
  );
};
