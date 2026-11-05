import type { UserOrder } from "../types/orders.types";

/** Checkout folds delivery and the cash-on-delivery fee into the total, so they are what is left over. */
export const getUserOrderDeliveryAmountHelper = ({
  subtotalAmount,
  discountAmount,
  totalAmount,
}: UserOrder): number => {
  const delivery = Number(totalAmount) - Number(subtotalAmount) + Number(discountAmount);

  return Math.max(0, Math.round(delivery * 100) / 100);
};
