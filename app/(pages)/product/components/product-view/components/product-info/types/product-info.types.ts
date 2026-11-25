import type { ProductReviewsResponse } from "@/app/(pages)/product/types/product-review.types";
import type { ProductDetails, ProductOffer } from "@/app/shared/products/types/products.types";
import type { BreadcrumbItem } from "@/app/ui/breadcrumb/types/breadcrumb.types";

export type ProductInfoProps = {
  product: ProductDetails;
  offer: ProductOffer;
  discountPercent?: number;
  breadcrumbItems: BreadcrumbItem[];
  /** First page of approved reviews, read on the server with the product. */
  reviews: ProductReviewsResponse;
  onSelectVariation: (variationId: string) => void;
};
