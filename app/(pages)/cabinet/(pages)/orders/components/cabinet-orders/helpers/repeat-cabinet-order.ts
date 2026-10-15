import { toastStore } from "@/app/core/providers/toast-provider/toast-store";
import { cartStore } from "@/app/shared/cart/cart-store";
import { formatProductsCountHelper } from "@/app/shared/products/helpers/format-products-count";
import type { UserOrderView } from "../../../types/orders.types";
import {
  CABINET_ORDERS_REPEAT_ERROR_TOAST_MESSAGE,
  CABINET_ORDERS_REPEAT_ERROR_TOAST_TITLE,
  CABINET_ORDERS_REPEAT_TOAST_ACTION_LABEL,
  CABINET_ORDERS_REPEAT_TOAST_MESSAGE,
  CABINET_ORDERS_REPEAT_TOAST_TITLE,
} from "../constants/cabinet-orders.constants";

/** Puts every product of the order that can still be bought back in the cart, in the same quantities. */
export function repeatCabinetOrderHelper(order: UserOrderView) {
  const lines = order.items.flatMap((item) =>
    item.cartItem ? [{ cartItem: item.cartItem, quantity: item.quantity }] : []
  );

  if (lines.length === 0) {
    toastStore.error(
      CABINET_ORDERS_REPEAT_ERROR_TOAST_TITLE,
      CABINET_ORDERS_REPEAT_ERROR_TOAST_MESSAGE
    );
    return;
  }

  lines.forEach(({ cartItem, quantity }) => cartStore.add(cartItem, quantity));

  const toastId = toastStore.success(
    CABINET_ORDERS_REPEAT_TOAST_TITLE,
    CABINET_ORDERS_REPEAT_TOAST_MESSAGE(order.number, formatProductsCountHelper(lines.length)),
    {
      label: CABINET_ORDERS_REPEAT_TOAST_ACTION_LABEL,
      onClick: () => {
        toastStore.dismiss(toastId);
        cartStore.open();
      },
    }
  );
}
