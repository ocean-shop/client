import { CART_ITEM_MAX_QUANTITY, CART_ITEM_MIN_QUANTITY } from "../constants/cart.constants";

export const clampCartItemQuantityHelper = (quantity: number): number => {
  return Math.min(CART_ITEM_MAX_QUANTITY, Math.max(CART_ITEM_MIN_QUANTITY, quantity));
};
