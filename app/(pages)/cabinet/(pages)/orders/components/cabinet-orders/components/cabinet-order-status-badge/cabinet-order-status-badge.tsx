import {
  CABINET_ORDER_STATUS_BADGE_SIZE_CLASS_NAMES,
  CABINET_ORDER_STATUSES,
} from "./constants/cabinet-order-status-badge.constants";
import type { CabinetOrderStatusBadgeProps } from "./types/cabinet-order-status-badge.types";

export function CabinetOrderStatusBadge({ status, size = "sm" }: CabinetOrderStatusBadgeProps) {
  const meta = CABINET_ORDER_STATUSES[status];
  const sizeClassNames = CABINET_ORDER_STATUS_BADGE_SIZE_CLASS_NAMES[size];

  return (
    <span
      className={`flex flex-none items-center gap-1.5 rounded-lg font-semibold ${sizeClassNames.badge} ${meta.className}`}
    >
      <span className={`font-symbols ${sizeClassNames.icon}`}>{meta.icon}</span>
      {meta.label}
    </span>
  );
}
