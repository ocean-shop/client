import type { OrderStatus } from "@/app/shared/orders/types/orders.types";

export type CabinetOrderStatusBadgeSize = "sm" | "md";

export type CabinetOrderStatusBadgeProps = {
  status: OrderStatus;
  size?: CabinetOrderStatusBadgeSize;
};

export type CabinetOrderStatusMeta = {
  label: string;
  icon: string;
  className: string;
};
