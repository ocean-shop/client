import type { CartItem } from "../types/cart.types";

export const CART_STORAGE_KEY = "ocean-shop:cart";

export const CART_ITEM_MIN_QUANTITY = 1;
export const CART_ITEM_MAX_QUANTITY = 99;

/** Shared by the server snapshot and an empty storage, so React sees one stable reference. */
export const CART_EMPTY_ITEMS: CartItem[] = [];

export const CART_ADDED_TOAST_TITLE = "Додано в кошик";
export const CART_ADDED_TOAST_MESSAGE = (productName: string, quantity: number) =>
  `${productName} — ${quantity} шт.`;
export const CART_ADDED_TOAST_ACTION_LABEL = "Перейти в кошик";

export const CART_ADD_ERROR_TOAST_TITLE = "Не вдалося додати в кошик";
export const CART_ADD_ERROR_TOAST_MESSAGE = "Спробуйте ще раз трохи пізніше.";
export const CART_UNAVAILABLE_TOAST_TITLE = "Немає в наявності";
export const CART_UNAVAILABLE_TOAST_MESSAGE = (productName: string) =>
  `${productName} зараз неможливо замовити.`;
