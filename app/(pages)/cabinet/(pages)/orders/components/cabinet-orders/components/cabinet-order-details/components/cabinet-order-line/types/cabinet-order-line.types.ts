import type { UserOrderItemView } from "../../../../../../../types/orders.types";

export type CabinetOrderLineProps = {
  item: UserOrderItemView;
  isLast: boolean;
};
