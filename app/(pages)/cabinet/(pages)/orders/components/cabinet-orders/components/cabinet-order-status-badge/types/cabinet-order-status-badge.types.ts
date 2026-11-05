import type { OrderStatus } from "@/app/shared/orders/types/orders.types";

export type CabinetOrderStatusBadgeSize = "sm" | "md";

export type CabinetOrderStatusBadgeSizeClassNames = {
  badge: string;
  icon: string;
};

export type CabinetOrderStatusBadgeProps = {
  status: OrderStatus;
  size?: CabinetOrderStatusBadgeSize;
};
