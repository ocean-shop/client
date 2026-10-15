import type { CabinetActiveOrder } from "../../../../../types/cabinet.types";
import type { CabinetActiveOrderStatusMeta } from "../types/cabinet-active-order.types";

export const CABINET_ACTIVE_ORDER_EYEBROW = "Активне замовлення";
export const CABINET_ACTIVE_ORDER_TITLE_PREFIX = "Замовлення";
export const CABINET_ACTIVE_ORDER_TITLE_SEPARATOR = " · ";
export const CABINET_ACTIVE_ORDER_EXPECTED_PREFIX = "Очікується";
export const CABINET_ACTIVE_ORDER_DETAILS_LABEL = "Деталі";
export const CABINET_ACTIVE_ORDER_TRACK_LABEL = "Відстежити";

/** Placed → confirmed → packed → on its way → delivered. */
export const CABINET_ACTIVE_ORDER_PROGRESS_STEPS = 5;
export const CABINET_ACTIVE_ORDER_THUMBNAILS_LIMIT = 3;

export const CABINET_ACTIVE_ORDER_STATUSES: Record<
  CabinetActiveOrder["status"],
  CabinetActiveOrderStatusMeta
> = {
  pending: { label: "Оформлено", icon: "schedule", progress: 1 },
  processing: { label: "Збираємо", icon: "inventory_2", progress: 3 },
  shipped: { label: "В дорозі", icon: "local_shipping", progress: 4 },
};
