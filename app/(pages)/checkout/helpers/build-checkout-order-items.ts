import type { CartItem } from "@/app/shared/cart/types/cart.types";
import type { CreateOrderItemRequest } from "@/app/shared/orders/types/orders.types";
import { roundCheckoutAmountHelper } from "./round-checkout-amount";

/**
 * The backend keys order lines by product and knows nothing of variations, so two variations of
 * one product merge into a single line priced at their average.
 */
export function buildCheckoutOrderItemsHelper(items: CartItem[]): CreateOrderItemRequest[] {
  const lines = new Map<string, { quantity: number; amount: number }>();

  items.forEach((item) => {
    const line = lines.get(item.productId) ?? { quantity: 0, amount: 0 };

    lines.set(item.productId, {
      quantity: line.quantity + item.quantity,
      amount: line.amount + Number(item.price) * item.quantity,
    });
  });

  return Array.from(lines, ([productId, { quantity, amount }]) => ({
    productId,
    unitPrice: roundCheckoutAmountHelper(amount / quantity),
    quantity,
  }));
}
