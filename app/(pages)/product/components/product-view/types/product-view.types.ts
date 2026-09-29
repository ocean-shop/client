import type { ProductDetails } from "@/app/shared/products/types/products.types";
import type { BreadcrumbItem } from "@/app/ui/breadcrumb/types/breadcrumb.types";

export type ProductViewProps = {
  product: ProductDetails;
  breadcrumbItems: BreadcrumbItem[];
};
