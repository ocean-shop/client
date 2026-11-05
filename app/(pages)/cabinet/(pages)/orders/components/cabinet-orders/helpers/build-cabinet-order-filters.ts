import type { UserOrderView } from "../../../types/orders.types";
import type { CabinetOrderFilterOption } from "../components/cabinet-order-filters/types/cabinet-order-filters.types";
import { CABINET_ORDERS_FILTERS } from "../constants/cabinet-orders.constants";
import { filterCabinetOrdersHelper } from "./filter-cabinet-orders";

/** Every status chip with how many of the loaded orders it would leave. */
export const buildCabinetOrderFiltersHelper = (
  orders: UserOrderView[]
): CabinetOrderFilterOption[] => {
  return CABINET_ORDERS_FILTERS.map((filter) => ({
    ...filter,
    count: filterCabinetOrdersHelper(orders, filter.statuses).length,
  }));
};
