export const PRODUCT_CART_ADD_LABEL = "Додати в кошик";
export const PRODUCT_CART_ONE_CLICK_LABEL = "Купити в 1 клік";
export const PRODUCT_CART_ONE_CLICK_ENABLED =
  process.env.NEXT_PUBLIC_ONE_CLICK_PURCHASE_ENABLED !== "false";

/** Checkout does not exist yet, so the one-click button says so instead of pretending to order. */
export const PRODUCT_CART_ONE_CLICK_TOAST_TITLE = "Скоро";
export const PRODUCT_CART_ONE_CLICK_TOAST_MESSAGE =
  "Купівля в 1 клік буде доступна найближчим часом.";
