import { toastStore } from "@/app/core/providers/toast-provider/toast-store";
import { cartStore } from "../cart-store";
import {
  CART_ADDED_TOAST_ACTION_LABEL,
  CART_ADDED_TOAST_MESSAGE,
  CART_ADDED_TOAST_TITLE,
} from "../constants/cart.constants";

/** Confirms an addition and offers a shortcut into the cart. */
export function notifyCartItemAddedHelper(productName: string, quantity: number) {
  const toastId = toastStore.success(
    CART_ADDED_TOAST_TITLE,
    CART_ADDED_TOAST_MESSAGE(productName, quantity),
    {
      label: CART_ADDED_TOAST_ACTION_LABEL,
      onClick: () => {
        toastStore.dismiss(toastId);
        cartStore.open();
      },
    }
  );
}
