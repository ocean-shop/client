import type { ProductVariation } from "@/app/shared/products/types/products.types";

export type ProductVariationsProps = {
  variations: ProductVariation[];
  selectedVariationId: string;
  onSelect: (variationId: string) => void;
};
