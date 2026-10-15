import type { UserOrderView } from "../../../../../../../types/orders.types";

export type CabinetOrderSummaryProps = {
  order: UserOrderView;
  onRepeat: () => void;
};
