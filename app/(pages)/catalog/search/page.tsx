import { redirect } from "next/navigation";
import { getCatalogProductsBySearch } from "@/app/shared/products/api/get-catalog-products-by-search";
import { parseCatalogProductsQueryHelper } from "@/app/shared/products/helpers/parse-catalog-products-query";
import { HEADER_HOME_HREF } from "@/app/layouts/header/constants/header.constants";
import { CatalogFilters } from "../components/catalog-filters/catalog-filters";
import { CatalogSearchBody } from "../components/catalog-search-body/catalog-search-body";
import { CatalogToolbar } from "../components/catalog-toolbar/catalog-toolbar";
import {
  CATALOG_CONTENT_CLASS_NAME,
  CATALOG_PAGE_CLASS_NAME,
  CATALOG_SEARCH_FILTER_GROUPS,
} from "../constants/catalog.constants";

export default async function CatalogSearchPage({ searchParams }: PageProps<"/catalog/search">) {
  const resolvedSearchParams = await searchParams;
  const query = parseCatalogProductsQueryHelper(resolvedSearchParams);

  // Without a term there is nothing to list, so the visitor starts over from the storefront.
  if (!query.searchTerm) redirect(HEADER_HOME_HREF);

  const productList = await getCatalogProductsBySearch(query);

  return (
    <div className={CATALOG_PAGE_CLASS_NAME}>
      <CatalogToolbar
        source={{ kind: "search" }}
        query={query}
        resultsCount={productList.total}
        filterGroups={CATALOG_SEARCH_FILTER_GROUPS}
      />

      <div className={CATALOG_CONTENT_CLASS_NAME}>
        <div className="hidden lg:block">
          <CatalogFilters groups={CATALOG_SEARCH_FILTER_GROUPS} query={query} />
        </div>
        <CatalogSearchBody query={query} searchTerm={query.searchTerm} productList={productList} />
      </div>
    </div>
  );
}
