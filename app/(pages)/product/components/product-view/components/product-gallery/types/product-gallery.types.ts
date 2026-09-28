import type { ProductImage } from "@/app/shared/products/types/products.types";

export type ProductGalleryProps = {
  images: ProductImage[];
  name: string;
  discountPercent?: number;
};
