import type { CatalogProductsQuery } from "@/app/shared/products/types/products.types";
import type { BreadcrumbItem } from "@/app/ui/breadcrumb/types/breadcrumb.types";

export type CatalogListingHeadingProps = {
  title: string;
  breadcrumbItems: BreadcrumbItem[];
  /** Total matching products for the applied query. */
  total: number;
  query: CatalogProductsQuery;
  /** False when the term itself matched nothing, so there is nothing to sort. */
  isSortVisible?: boolean;
};
