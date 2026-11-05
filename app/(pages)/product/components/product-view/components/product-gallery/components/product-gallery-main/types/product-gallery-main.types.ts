import type { ProductImage } from "@/app/shared/products/types/products.types";

export type ProductGalleryMainProps = {
  productId: string;
  image: ProductImage;
  name: string;
  discountPercent?: number;
  onZoom: () => void;
  /** Drawn over the bottom of the photo. */
  children?: React.ReactNode;
};
