import { toastStore } from "@/app/core/providers/toast-provider/toast-store";
import { cartStore } from "../cart-store";
import {
  CART_ADDED_TOAST_ACTION_LABEL,
  CART_ADDED_TOAST_CHECKOUT_LABEL,
  CART_ADDED_TOAST_MESSAGE,
  CART_ADDED_TOAST_TITLE,
  CHECKOUT_PAGE_PATH,
} from "../constants/cart.constants";

/** Confirms an addition and offers shortcuts into the cart or straight to checkout. */
export const notifyCartItemAddedHelper = (productName: string, quantity: number) => {
  const toastId = toastStore.success(
    CART_ADDED_TOAST_TITLE,
    CART_ADDED_TOAST_MESSAGE(productName, quantity),
    [
      {
        label: CART_ADDED_TOAST_ACTION_LABEL,
        onClick: () => {
          toastStore.dismiss(toastId);
          cartStore.open();
        },
      },
      {
        label: CART_ADDED_TOAST_CHECKOUT_LABEL,
        href: CHECKOUT_PAGE_PATH,
        onClick: () => toastStore.dismiss(toastId),
      },
    ]
  );
};
