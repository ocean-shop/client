import type { ProductOffer } from "@/app/shared/products/types/products.types";
import type { BreadcrumbItem } from "@/app/ui/breadcrumb/types/breadcrumb.types";

export type ProductHeadingProps = {
  name: string;
  offer: ProductOffer;
  breadcrumbItems: BreadcrumbItem[];
};
