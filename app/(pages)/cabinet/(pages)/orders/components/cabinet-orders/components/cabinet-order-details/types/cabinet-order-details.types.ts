import type { UserOrderView } from "../../../../../types/orders.types";

export type CabinetOrderDetailsProps = {
  order: UserOrderView;
  onBack: () => void;
  onRepeat: () => void;
};
