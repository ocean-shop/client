import {
  CATALOG_PRODUCTS_QUERY_PARAM,
  CATALOG_SEARCH_PAGE_PATH,
} from "../constants/products.constants";

/** Link to the full search results listing for a term typed in the header. */
export function buildCatalogSearchHrefHelper(searchTerm: string): string {
  const searchParams = new URLSearchParams({
    [CATALOG_PRODUCTS_QUERY_PARAM.query]: searchTerm,
  });

  return `${CATALOG_SEARCH_PAGE_PATH}?${searchParams.toString()}`;
}
