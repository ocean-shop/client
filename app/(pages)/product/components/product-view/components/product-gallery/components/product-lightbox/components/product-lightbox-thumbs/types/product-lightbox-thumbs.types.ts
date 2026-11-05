import type { ProductImage } from "@/app/shared/products/types/products.types";

export type ProductLightboxThumbsProps = {
  images: ProductImage[];
  activeIndex: number;
  name: string;
  onSelect: (index: number) => void;
};
