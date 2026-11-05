import type { ProductImage } from "@/app/shared/products/types/products.types";

export type ProductGalleryThumbsProps = {
  images: ProductImage[];
  activeIndex: number;
  name: string;
  onSelect: (index: number) => void;
};
