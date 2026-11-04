import type { CabinetActiveOrder } from "../../../../../types/cabinet.types";

export const CABINET_ACTIVE_ORDER_EYEBROW = "Активне замовлення";
export const CABINET_ACTIVE_ORDER_DETAILS_LABEL = "Деталі";
export const CABINET_ACTIVE_ORDER_TRACK_LABEL = "Відстежити";

export const CABINET_ACTIVE_ORDER_THUMBNAILS_LIMIT = 3;

/** How many of the progress bars each status fills. */
export const CABINET_ACTIVE_ORDER_PROGRESS: Record<CabinetActiveOrder["status"], number> = {
  pending: 1,
  processing: 3,
  shipped: 4,
};

export const CABINET_ACTIVE_ORDER_ACTION_CLASS_NAME =
  "h-[42px] flex-1 rounded-[10px] px-4 text-[13.5px] lg:flex-none";
