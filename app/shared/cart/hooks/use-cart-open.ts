"use client";

import { useSyncExternalStore } from "react";
import { cartStore } from "../cart-store";

export const useCartOpen = () => {
  return useSyncExternalStore(cartStore.subscribe, cartStore.getIsOpen, cartStore.getServerIsOpen);
};
