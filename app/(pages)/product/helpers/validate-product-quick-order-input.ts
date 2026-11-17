import {
  PRODUCT_QUICK_ORDER_NAME_MAX_LENGTH,
  PRODUCT_QUICK_ORDER_PHONE_PATTERN,
  PRODUCT_QUICK_ORDER_VALIDATION_MESSAGES,
} from "../constants/product-quick-order.constants";
import type {
  ProductQuickOrderErrors,
  ProductQuickOrderInput,
} from "../types/product-quick-order.types";

/**
 * Every field that still needs attention, or `null` when the order can be sent. Expects input
 * already normalized by `buildProductQuickOrderInputHelper`; runs in the form and in the action.
 */
export const validateProductQuickOrderInputHelper = ({
  name,
  phone,
}: ProductQuickOrderInput): ProductQuickOrderErrors | null => {
  const errors: ProductQuickOrderErrors = {};

  if (!name || name.length > PRODUCT_QUICK_ORDER_NAME_MAX_LENGTH) {
    errors.name = PRODUCT_QUICK_ORDER_VALIDATION_MESSAGES.name;
  }
  if (!PRODUCT_QUICK_ORDER_PHONE_PATTERN.test(phone)) {
    errors.phone = PRODUCT_QUICK_ORDER_VALIDATION_MESSAGES.phone;
  }

  return Object.keys(errors).length > 0 ? errors : null;
};
