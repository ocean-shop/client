import { localStorageService } from "@/app/core/local-storage/local-storage.service";
import {
  CART_EMPTY_ITEMS,
  CART_ITEM_MAX_QUANTITY,
  CART_ITEM_MIN_QUANTITY,
  CART_STORAGE_KEY,
} from "./constants/cart.constants";
import { parseCartItemsHelper } from "./helpers/parse-cart-items";
import type { CartItem, CartItemInput, CartListener } from "./types/cart.types";

/**
 * The cart lives in the browser only: lines persist in local storage, and the modal's open flag
 * sits next to them so the header, the tab bar and the product buttons all drive the same modal.
 */
let items: CartItem[] | null = null;
let isOpen = false;
let listeners: CartListener[] = [];
let unsubscribeStorage: (() => void) | null = null;

function emit() {
  listeners.forEach((listener) => listener());
}

function readItems() {
  const stored = parseCartItemsHelper(localStorageService.getItem(CART_STORAGE_KEY, []));

  return stored.length > 0 ? stored : CART_EMPTY_ITEMS;
}

/** Storage is read on first use rather than on import, so the module stays safe to load on the server. */
function getItems() {
  items ??= readItems();

  return items;
}

function commit(nextItems: CartItem[]) {
  items = nextItems.length > 0 ? nextItems : CART_EMPTY_ITEMS;
  localStorageService.setItem(CART_STORAGE_KEY, items);
  emit();
}

function clampQuantity(quantity: number) {
  return Math.min(CART_ITEM_MAX_QUANTITY, Math.max(CART_ITEM_MIN_QUANTITY, quantity));
}

/** Adding an offer already in the cart raises its quantity and refreshes its price and photo. */
function add(input: CartItemInput, quantity: number) {
  const current = getItems();
  const existing = current.find((item) => item.id === input.id);

  if (!existing) {
    commit([...current, { ...input, quantity: clampQuantity(quantity) }]);
    return;
  }

  commit(
    current.map((item) =>
      item.id === input.id ? { ...input, quantity: clampQuantity(item.quantity + quantity) } : item
    )
  );
}

function setQuantity(id: string, quantity: number) {
  commit(
    getItems().map((item) =>
      item.id === id ? { ...item, quantity: clampQuantity(quantity) } : item
    )
  );
}

function remove(id: string) {
  commit(getItems().filter((item) => item.id !== id));
}

function open() {
  isOpen = true;
  emit();
}

function close() {
  isOpen = false;
  emit();
}

function subscribe(listener: CartListener) {
  listeners = [...listeners, listener];

  // Keeps every open tab on the same cart.
  unsubscribeStorage ??= localStorageService.subscribe(CART_STORAGE_KEY, () => {
    items = readItems();
    emit();
  });

  return () => {
    listeners = listeners.filter((existing) => existing !== listener);

    if (listeners.length === 0) {
      unsubscribeStorage?.();
      unsubscribeStorage = null;
    }
  };
}

function getIsOpen() {
  return isOpen;
}

/** The server cannot see local storage, so it always renders an empty, closed cart. */
function getServerItems() {
  return CART_EMPTY_ITEMS;
}

function getServerIsOpen() {
  return false;
}

export const cartStore = {
  subscribe,
  getItems,
  getServerItems,
  getIsOpen,
  getServerIsOpen,
  add,
  setQuantity,
  remove,
  open,
  close,
};
