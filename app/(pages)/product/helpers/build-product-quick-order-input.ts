import { PRODUCT_QUICK_ORDER_PHONE_SEPARATORS_PATTERN } from "../constants/product-quick-order.constants";
import type { ProductQuickOrderInput } from "../types/product-quick-order.types";

/**
 * Trims the fields and drops spaces, dashes and brackets typed into the phone. Coerces every field
 * to a string, since the server action receives it from the client as untrusted input.
 */
export const buildProductQuickOrderInputHelper = (
  input: ProductQuickOrderInput
): ProductQuickOrderInput => {
  return {
    productId: String(input.productId ?? "").trim(),
    name: String(input.name ?? "").trim(),
    phone: String(input.phone ?? "")
      .trim()
      .replace(PRODUCT_QUICK_ORDER_PHONE_SEPARATORS_PATTERN, ""),
  };
};
