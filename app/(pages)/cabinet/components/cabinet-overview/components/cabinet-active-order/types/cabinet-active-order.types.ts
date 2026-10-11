import type { CabinetActiveOrder } from "../../../../../types/cabinet.types";

export type CabinetActiveOrderProps = {
  order: CabinetActiveOrder;
};

export type CabinetActiveOrderStatusMeta = {
  label: string;
  icon: string;
  /** How many of the progress bars are filled. */
  progress: number;
};
