import { CART_ITEM_MAX_QUANTITY, CART_ITEM_MIN_QUANTITY } from "../constants/cart.constants";
import type { CartItem } from "../types/cart.types";

function isCartItem(value: unknown): value is CartItem {
  if (!value || typeof value !== "object") return false;

  const item = value as Record<string, unknown>;

  return (
    typeof item.id === "string" &&
    typeof item.productId === "string" &&
    typeof item.name === "string" &&
    typeof item.price === "string" &&
    Number.isInteger(item.quantity) &&
    (item.quantity as number) >= CART_ITEM_MIN_QUANTITY &&
    (item.quantity as number) <= CART_ITEM_MAX_QUANTITY
  );
}

/** Storage is user-editable, so lines that do not look like cart items are dropped, not trusted. */
export function parseCartItemsHelper(value: unknown): CartItem[] {
  if (!Array.isArray(value)) return [];

  return value.filter(isCartItem);
}
