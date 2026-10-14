import type { UserOrderStepState } from "../../../../../../../types/orders.types";
import type { CabinetOrderStepMeta } from "../types/cabinet-order-progress.types";

export const CABINET_ORDER_STEPS: Record<UserOrderStepState, CabinetOrderStepMeta> = {
  done: {
    icon: "check",
    markerClassName: "border-accent bg-accent",
    labelClassName: "font-medium text-foreground",
  },
  current: {
    icon: "check",
    markerClassName: "border-accent bg-accent",
    labelClassName: "font-semibold text-foreground",
  },
  upcoming: {
    icon: "",
    markerClassName: "border-border-soft bg-background",
    labelClassName: "font-medium text-muted-light",
  },
  cancelled: {
    icon: "close",
    markerClassName: "border-error-dark bg-error-dark",
    labelClassName: "font-semibold text-error-dark",
  },
};

export const CABINET_ORDER_STEP_LINE_CLASS_NAMES = {
  reached: "bg-accent",
  upcoming: "bg-border-soft",
};
