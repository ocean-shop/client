import type { CartItem, CartTotals } from "../types/cart.types";

export function calculateCartTotalsHelper(items: CartItem[]): CartTotals {
  return items.reduce<CartTotals>(
    (totals, item) => {
      const price = Number(item.price);
      // An old price that is not higher is no discount, the same rule the product badges follow.
      const oldPrice = Math.max(price, Number(item.oldPrice ?? price));

      return {
        quantity: totals.quantity + item.quantity,
        subtotal: totals.subtotal + oldPrice * item.quantity,
        discount: totals.discount + (oldPrice - price) * item.quantity,
        total: totals.total + price * item.quantity,
      };
    },
    { quantity: 0, subtotal: 0, discount: 0, total: 0 }
  );
}
