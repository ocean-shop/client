import type { OrderStatus } from "@/app/shared/orders/types/orders.types";
import type {
  CabinetOrderStatusBadgeSize,
  CabinetOrderStatusMeta,
} from "../types/cabinet-order-status-badge.types";

export const CABINET_ORDER_STATUSES: Record<OrderStatus, CabinetOrderStatusMeta> = {
  pending: { label: "Оформлено", icon: "schedule", className: "bg-surface text-muted" },
  processing: {
    label: "Збираємо",
    icon: "inventory_2",
    className: "bg-accent-soft text-accent-dark",
  },
  shipped: {
    label: "В дорозі",
    icon: "local_shipping",
    className: "bg-accent-soft text-accent-dark",
  },
  cancelled: { label: "Скасовано", icon: "cancel", className: "bg-error/10 text-error-dark" },
};

export const CABINET_ORDER_STATUS_BADGE_SIZE_CLASS_NAMES: Record<
  CabinetOrderStatusBadgeSize,
  { badge: string; icon: string }
> = {
  sm: { badge: "h-7 px-2.5 text-[12.5px]", icon: "text-base" },
  md: { badge: "h-[30px] px-3 text-[13px]", icon: "text-[17px]" },
};
