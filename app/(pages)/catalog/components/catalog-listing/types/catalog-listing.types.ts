import type {
  CatalogProductsQuery,
  ProductListResponse,
} from "@/app/shared/products/types/products.types";
import type { BreadcrumbItem } from "@/app/ui/breadcrumb/types/breadcrumb.types";

export type CatalogListingProps = {
  title: string;
  breadcrumbItems: BreadcrumbItem[];
  query: CatalogProductsQuery;
  productList: ProductListResponse;
  emptyMessage?: string;
  categorySlug?: string;
  isSortVisible?: boolean;
  /** Placed between the heading and the grid. */
  children?: React.ReactNode;
};
