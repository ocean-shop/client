import type { ProductReviewInput } from "@/app/(pages)/product/types/product-review.types";
import type { ProductDetails, ProductOffer } from "@/app/shared/products/types/products.types";

export type ProductReviewFormProps = {
  product: ProductDetails;
  offer: ProductOffer;
  onCancel: () => void;
  /** Called once the backend accepted the review for moderation. */
  onSent: () => void;
};

/** The text fields, read from the form on submit; the rating lives in state. */
export type ProductReviewFormValues = Pick<
  ProductReviewInput,
  "name" | "advantages" | "drawbacks" | "comment"
>;

export type ProductReviewFormInputField = {
  name: "name" | "advantages" | "drawbacks";
  label: string;
  placeholder: string;
  maxLength: number;
  autoComplete?: string;
};
