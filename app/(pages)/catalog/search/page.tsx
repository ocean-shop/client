import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { SEO_NO_INDEX_METADATA } from "@/app/shared/seo/constants/seo.constants";
import { getCatalogProductsBySearch } from "@/app/shared/products/api/get-catalog-products-by-search";
import { parseCatalogProductsQueryHelper } from "@/app/shared/products/helpers/parse-catalog-products-query";
import { countCatalogActiveFiltersHelper } from "@/app/shared/products/helpers/count-catalog-active-filters";
import { HEADER_HOME_HREF } from "@/app/layouts/header/constants/header.constants";
import { CatalogFilters } from "../components/catalog-filters/catalog-filters";
import { mapCatalogFiltersToGroupsHelper } from "../components/catalog-filters/helpers/map-catalog-filters-to-groups";
import { CatalogSearchBody } from "../components/catalog-search-body/catalog-search-body";
import { CatalogToolbar } from "../components/catalog-toolbar/catalog-toolbar";
import {
  CATALOG_CONTENT_CLASS_NAME,
  CATALOG_CONTENT_WITHOUT_FILTERS_CLASS_NAME,
  CATALOG_PAGE_CLASS_NAME,
  CATALOG_SEARCH_METADATA_TITLE,
} from "../constants/catalog.constants";

export const metadata: Metadata = {
  ...SEO_NO_INDEX_METADATA,
  title: CATALOG_SEARCH_METADATA_TITLE,
};

const CatalogSearchPage = async ({ searchParams }: PageProps<"/catalog/search">) => {
  const resolvedSearchParams = await searchParams;
  const query = parseCatalogProductsQueryHelper(resolvedSearchParams);

  // Without a term there is nothing to list, so the visitor starts over from the storefront.
  if (!query.searchTerm) redirect(HEADER_HOME_HREF);

  /**
   * The listing response carries the filters and the categories of the term, so the panel
   * costs no second request.
   */
  const productList = await getCatalogProductsBySearch(query);
  const filterGroups = mapCatalogFiltersToGroupsHelper(productList.filters);

  /**
   * A term that matches nothing leaves nothing to sort or filter. With active filters the
   * controls stay, so the visitor can loosen whatever narrowed the results down to zero.
   */
  const hasControls = productList.total > 0 || countCatalogActiveFiltersHelper(query) > 0;

  return (
    <div className={CATALOG_PAGE_CLASS_NAME}>
      {hasControls && (
        <CatalogToolbar
          source={{ kind: "search" }}
          query={query}
          resultsCount={productList.total}
          filterGroups={filterGroups}
          filterCategories={productList.categories}
        />
      )}

      <div
        className={
          hasControls ? CATALOG_CONTENT_CLASS_NAME : CATALOG_CONTENT_WITHOUT_FILTERS_CLASS_NAME
        }
      >
        {hasControls && (
          <div className="hidden lg:block">
            <CatalogFilters
              groups={filterGroups}
              categories={productList.categories}
              query={query}
            />
          </div>
        )}
        <CatalogSearchBody
          query={query}
          searchTerm={query.searchTerm}
          productList={productList}
          isSortVisible={hasControls}
        />
      </div>
    </div>
  );
};

export default CatalogSearchPage;
