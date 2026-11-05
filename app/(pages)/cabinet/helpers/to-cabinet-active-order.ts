import type { ProductDetails } from "@/app/shared/products/types/products.types";
import { toUserOrderViewHelper } from "../(pages)/orders/helpers/to-user-order-view";
import type { UserOrder } from "../(pages)/orders/types/orders.types";
import type { CabinetActiveOrder } from "../types/cabinet.types";

/** A cancelled order is not on its way anywhere, so the overview has nothing to show for it. */
export const toCabinetActiveOrderHelper = (
  order: UserOrder,
  products: Map<string, ProductDetails>
): CabinetActiveOrder | null => {
  if (order.status === "cancelled") return null;

  const view = toUserOrderViewHelper(order, products);

  return {
    id: view.id,
    number: view.number,
    totalAmount: view.amounts.total,
    status: order.status,
    shippingNote: view.shipping.address,
    // The backend keeps neither a delivery estimate nor a tracking number yet.
    expectedDelivery: null,
    items: view.items.map(({ id, name, image }) => ({ id, name, image })),
    trackingHref: null,
  };
};
