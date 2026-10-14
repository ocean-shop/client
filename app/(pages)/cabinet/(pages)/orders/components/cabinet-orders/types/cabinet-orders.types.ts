import type { OrderStatus } from "@/app/shared/orders/types/orders.types";
import type { UserOrderView } from "../../../types/orders.types";

export type CabinetOrdersProps = {
  orders: UserOrderView[];
  page: number;
  totalPages: number;
};

export type CabinetOrdersFilterId = "all" | "active" | "shipped" | "cancelled";

export type CabinetOrdersFilter = {
  id: CabinetOrdersFilterId;
  label: string;
  /** `null` lets every order through. */
  statuses: OrderStatus[] | null;
};
