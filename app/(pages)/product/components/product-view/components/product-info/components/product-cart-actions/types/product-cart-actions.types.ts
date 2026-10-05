import type { ProductDetails, ProductOffer } from "@/app/shared/products/types/products.types";

export type ProductCartActionsProps = {
  product: ProductDetails;
  /** The selected variation (or the product itself): this is what lands in the cart. */
  offer: ProductOffer;
};
