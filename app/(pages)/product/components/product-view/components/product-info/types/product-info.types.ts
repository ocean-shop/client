import type { ProductDetails, ProductOffer } from "@/app/shared/products/types/products.types";
import type { BreadcrumbItem } from "@/app/ui/breadcrumb/types/breadcrumb.types";

export type ProductInfoProps = {
  product: ProductDetails;
  offer: ProductOffer;
  discountPercent?: number;
  breadcrumbItems: BreadcrumbItem[];
  onSelectVariation: (variationId: string) => void;
};
