import type { UserOrderView } from "../../../../../types/orders.types";

export type CabinetOrderCardProps = {
  order: UserOrderView;
  onOpen: () => void;
  onRepeat: () => void;
};
