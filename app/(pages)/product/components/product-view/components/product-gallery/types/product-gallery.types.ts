import type { ProductImage } from "@/app/shared/products/types/products.types";

export type ProductGalleryProps = {
  productId: string;
  images: ProductImage[];
  name: string;
  discountPercent?: number;
};
