import type { ProductReviewsResponse } from "@/app/(pages)/product/types/product-review.types";
import type { ProductDetails } from "@/app/shared/products/types/products.types";
import type { BreadcrumbItem } from "@/app/ui/breadcrumb/types/breadcrumb.types";

export type ProductViewProps = {
  product: ProductDetails;
  breadcrumbItems: BreadcrumbItem[];
  /** First page of approved reviews, read on the server with the product. */
  reviews: ProductReviewsResponse;
};
