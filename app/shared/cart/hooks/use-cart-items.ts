"use client";

import { useSyncExternalStore } from "react";
import { cartStore } from "../cart-store";

export function useCartItems() {
  return useSyncExternalStore(cartStore.subscribe, cartStore.getItems, cartStore.getServerItems);
}
