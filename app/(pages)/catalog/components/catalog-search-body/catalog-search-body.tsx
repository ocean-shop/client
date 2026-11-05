import { countCatalogActiveFiltersHelper } from "@/app/shared/products/helpers/count-catalog-active-filters";
import { CatalogListing } from "../catalog-listing/catalog-listing";
import {
  CATALOG_HOME_BREADCRUMB_ITEM,
  CATALOG_NO_MATCHES_MESSAGE,
} from "../../constants/catalog.constants";
import {
  CATALOG_SEARCH_BODY_BREADCRUMB_LABEL,
  CATALOG_SEARCH_BODY_EMPTY_MESSAGE,
  CATALOG_SEARCH_BODY_TITLE,
} from "./constants/catalog-search-body.constants";
import type { CatalogSearchBodyProps } from "./types/catalog-search-body.types";

/** The category listing's counterpart for a search term: same grid, sorting and pagination. */
export const CatalogSearchBody = ({
  query,
  searchTerm,
  productList,
  isSortVisible,
}: CatalogSearchBodyProps) => {
  /** Nothing found tells two different stories depending on whether filters narrowed it down. */
  const emptyMessage =
    countCatalogActiveFiltersHelper(query) > 0
      ? CATALOG_NO_MATCHES_MESSAGE
      : CATALOG_SEARCH_BODY_EMPTY_MESSAGE(searchTerm);

  return (
    <CatalogListing
      title={CATALOG_SEARCH_BODY_TITLE(searchTerm)}
      breadcrumbItems={[
        CATALOG_HOME_BREADCRUMB_ITEM,
        { label: CATALOG_SEARCH_BODY_BREADCRUMB_LABEL },
      ]}
      query={query}
      productList={productList}
      emptyMessage={emptyMessage}
      isSortVisible={isSortVisible}
    />
  );
};
