export const PRODUCT_CART_ADD_LABEL = "Додати в кошик";
export const PRODUCT_CART_UNAVAILABLE_LABEL = "Немає в наявності";
export const PRODUCT_CART_ONE_CLICK_LABEL = "Купити в 1 клік";
export const PRODUCT_CART_DECREASE_LABEL = "Зменшити кількість";
export const PRODUCT_CART_INCREASE_LABEL = "Збільшити кількість";

export const PRODUCT_CART_ADDED_TOAST_TITLE = "Додано в кошик";
export const PRODUCT_CART_ADDED_TOAST_MESSAGE = (productName: string, quantity: number) =>
  `${productName} — ${quantity} шт.`;

/** Checkout does not exist yet, so the one-click button says so instead of pretending to order. */
export const PRODUCT_CART_ONE_CLICK_TOAST_TITLE = "Скоро";
export const PRODUCT_CART_ONE_CLICK_TOAST_MESSAGE =
  "Купівля в 1 клік буде доступна найближчим часом.";

export const PRODUCT_CART_MIN_QUANTITY = 1;
export const PRODUCT_CART_MAX_QUANTITY = 99;
