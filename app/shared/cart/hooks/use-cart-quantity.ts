"use client";

import { useCartItems } from "./use-cart-items";

/** Total number of units in the cart, as the cart badges show it. */
export const useCartQuantity = () => {
  return useCartItems().reduce((sum, item) => sum + item.quantity, 0);
};
