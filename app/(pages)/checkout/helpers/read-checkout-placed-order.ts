import { localStorageService } from "@/app/core/local-storage/local-storage.service";
import { CHECKOUT_PLACED_ORDER_STORAGE_KEY } from "../constants/checkout.constants";
import type { CheckoutPlacedOrder } from "../types/checkout.types";

/** Storage can be hand-edited, so anything without an id and a list of lines counts as missing. */
export function readCheckoutPlacedOrderHelper(): CheckoutPlacedOrder | null {
  const stored = localStorageService.getItem<Partial<CheckoutPlacedOrder> | null>(
    CHECKOUT_PLACED_ORDER_STORAGE_KEY,
    null
  );

  if (!stored || typeof stored.id !== "string" || !Array.isArray(stored.items)) return null;

  return stored as CheckoutPlacedOrder;
}
