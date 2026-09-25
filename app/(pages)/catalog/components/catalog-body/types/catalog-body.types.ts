import type { CatalogCategory } from "@/app/shared/catalog-categories/types/catalog-categories.types";
import type {
  CatalogProductsQuery,
  ProductListResponse,
} from "@/app/shared/products/types/products.types";

export type CatalogBodyProps = {
  category: CatalogCategory;
  query: CatalogProductsQuery;
  productList: ProductListResponse;
};
