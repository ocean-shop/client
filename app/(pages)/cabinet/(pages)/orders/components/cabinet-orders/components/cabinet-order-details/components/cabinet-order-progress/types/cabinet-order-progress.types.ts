import type { UserOrderStepView } from "../../../../../../../types/orders.types";

export type CabinetOrderProgressProps = {
  steps: UserOrderStepView[];
};

export type CabinetOrderStepMeta = {
  icon: string;
  markerClassName: string;
  labelClassName: string;
};
