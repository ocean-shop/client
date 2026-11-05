import type {
  CatalogProductsQuery,
  ProductListResponse,
} from "@/app/shared/products/types/products.types";

export type CatalogSearchBodyProps = {
  /** Carries the search term the listing was built from. */
  query: CatalogProductsQuery;
  searchTerm: string;
  productList: ProductListResponse;
  /** False when the term itself matched nothing, so there is nothing to sort. */
  isSortVisible: boolean;
};
