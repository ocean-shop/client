import { redirect } from "next/navigation";
import { getCatalogProductsBySearch } from "@/app/shared/products/api/get-catalog-products-by-search";
import { parseCatalogProductsQueryHelper } from "@/app/shared/products/helpers/parse-catalog-products-query";
import { HEADER_HOME_HREF } from "@/app/layouts/header/constants/header.constants";
import { CatalogFilters } from "../components/catalog-filters/catalog-filters";
import { mapCatalogFiltersToGroupsHelper } from "../components/catalog-filters/helpers/map-catalog-filters-to-groups";
import { CatalogSearchBody } from "../components/catalog-search-body/catalog-search-body";
import { CatalogToolbar } from "../components/catalog-toolbar/catalog-toolbar";
import {
  CATALOG_CONTENT_CLASS_NAME,
  CATALOG_PAGE_CLASS_NAME,
} from "../constants/catalog.constants";

export default async function CatalogSearchPage({ searchParams }: PageProps<"/catalog/search">) {
  const resolvedSearchParams = await searchParams;
  const query = parseCatalogProductsQueryHelper(resolvedSearchParams);

  // Without a term there is nothing to list, so the visitor starts over from the storefront.
  if (!query.searchTerm) redirect(HEADER_HOME_HREF);

  /** The listing response carries the filters of the term, so the panel costs no second request. */
  const productList = await getCatalogProductsBySearch(query);
  const filterGroups = mapCatalogFiltersToGroupsHelper(productList.filters);

  return (
    <div className={CATALOG_PAGE_CLASS_NAME}>
      <CatalogToolbar
        source={{ kind: "search" }}
        query={query}
        resultsCount={productList.total}
        filterGroups={filterGroups}
      />

      <div className={CATALOG_CONTENT_CLASS_NAME}>
        <div className="hidden lg:block">
          <CatalogFilters groups={filterGroups} query={query} />
        </div>
        <CatalogSearchBody query={query} searchTerm={query.searchTerm} productList={productList} />
      </div>
    </div>
  );
}
