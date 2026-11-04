import { MaterialIcon } from "@/app/ui/material-icon/material-icon";
import { ORDER_STATUS_META } from "../../../../constants/orders.constants";
import {
  CABINET_ORDER_STATUS_BADGE_CLASS_NAMES,
  CABINET_ORDER_STATUS_BADGE_SIZE_CLASS_NAMES,
} from "./constants/cabinet-order-status-badge.constants";
import type { CabinetOrderStatusBadgeProps } from "./types/cabinet-order-status-badge.types";

export const CabinetOrderStatusBadge = ({ status, size = "sm" }: CabinetOrderStatusBadgeProps) => {
  const meta = ORDER_STATUS_META[status];
  const sizeClassNames = CABINET_ORDER_STATUS_BADGE_SIZE_CLASS_NAMES[size];

  return (
    <span
      className={`flex flex-none items-center gap-1.5 rounded-lg font-semibold ${sizeClassNames.badge} ${CABINET_ORDER_STATUS_BADGE_CLASS_NAMES[status]}`}
    >
      <MaterialIcon name={meta.icon} className={sizeClassNames.icon} />
      {meta.label}
    </span>
  );
};
