import type { OrderStatus } from "@/app/shared/orders/types/orders.types";
import type {
  CabinetOrderStatusBadgeSize,
  CabinetOrderStatusBadgeSizeClassNames,
} from "../types/cabinet-order-status-badge.types";

export const CABINET_ORDER_STATUS_BADGE_CLASS_NAMES: Record<OrderStatus, string> = {
  pending: "bg-surface text-muted",
  processing: "bg-accent-soft text-accent-dark",
  shipped: "bg-accent-soft text-accent-dark",
  cancelled: "bg-error/10 text-error-dark",
};

export const CABINET_ORDER_STATUS_BADGE_SIZE_CLASS_NAMES: Record<
  CabinetOrderStatusBadgeSize,
  CabinetOrderStatusBadgeSizeClassNames
> = {
  sm: { badge: "h-7 px-2.5 text-[12.5px]", icon: "text-base" },
  md: { badge: "h-[30px] px-3 text-[13px]", icon: "text-[17px]" },
};
