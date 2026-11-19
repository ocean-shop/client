import type { ProductDetails, ProductOffer } from "@/app/shared/products/types/products.types";
import type { ProductQuickOrderField } from "@/app/(pages)/product/types/product-quick-order.types";

export type ProductQuickOrderModalProps = {
  product: ProductDetails;
  /** The selected variation; only its price is shown, the order itself is for the product. */
  offer: ProductOffer;
  isOpen: boolean;
  onClose: () => void;
};

export type ProductQuickOrderFormValues = Record<ProductQuickOrderField, string>;

export type ProductQuickOrderInputField = {
  name: ProductQuickOrderField;
  label: string;
  placeholder: string;
  maxLength: number;
  autoComplete: string;
  type: "text" | "tel";
  inputMode: "text" | "tel";
};
