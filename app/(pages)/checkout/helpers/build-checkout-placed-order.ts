import type { Order } from "@/app/shared/orders/types/orders.types";
import { CHECKOUT_ORDER_SHORT_ID_LENGTH } from "../constants/checkout.constants";
import type { CheckoutOrderDraft, CheckoutPlacedOrder } from "../types/checkout.types";

export function buildCheckoutPlacedOrderHelper(
  order: Order,
  { contact, delivery, payment, items, totals }: CheckoutOrderDraft
): CheckoutPlacedOrder {
  return {
    id: order.id,
    number: order.orderNumber ?? order.id.slice(0, CHECKOUT_ORDER_SHORT_ID_LENGTH).toUpperCase(),
    email: contact.email.trim(),
    delivery,
    payment,
    items,
    total: totals.total,
    placedAt: order.createdAt,
  };
}
