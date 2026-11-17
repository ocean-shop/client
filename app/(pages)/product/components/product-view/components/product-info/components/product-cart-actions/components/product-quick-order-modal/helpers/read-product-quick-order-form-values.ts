import type { ProductQuickOrderFormValues } from "../types/product-quick-order-modal.types";

export const readProductQuickOrderFormValuesHelper = (
  form: HTMLFormElement
): ProductQuickOrderFormValues => {
  const data = new FormData(form);

  return {
    name: String(data.get("name") ?? ""),
    phone: String(data.get("phone") ?? ""),
  };
};
