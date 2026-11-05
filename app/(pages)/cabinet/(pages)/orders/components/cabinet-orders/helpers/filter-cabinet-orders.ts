import type { OrderStatus } from "@/app/shared/orders/types/orders.types";
import type { UserOrderView } from "../../../types/orders.types";

/** `null` lets every order through. */
export const filterCabinetOrdersHelper = (
  orders: UserOrderView[],
  statuses: OrderStatus[] | null
): UserOrderView[] => {
  return statuses ? orders.filter((order) => statuses.includes(order.status)) : orders;
};
