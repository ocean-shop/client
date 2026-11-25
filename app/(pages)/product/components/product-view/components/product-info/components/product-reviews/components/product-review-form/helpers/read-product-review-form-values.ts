import type { ProductReviewFormValues } from "../types/product-review-form.types";

export const readProductReviewFormValuesHelper = (
  form: HTMLFormElement
): ProductReviewFormValues => {
  const data = new FormData(form);

  return {
    name: String(data.get("name") ?? ""),
    advantages: String(data.get("advantages") ?? ""),
    drawbacks: String(data.get("drawbacks") ?? ""),
    comment: String(data.get("comment") ?? ""),
  };
};
