import type { ProductOffer } from "@/app/shared/products/types/products.types";

export type ProductPriceProps = {
  offer: ProductOffer;
  discountPercent?: number;
};
