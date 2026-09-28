import type { ProductImage } from "@/app/shared/products/types/products.types";

export type ProductLightboxProps = {
  images: ProductImage[];
  activeIndex: number;
  name: string;
  onSelect: (index: number) => void;
  onClose: () => void;
};
