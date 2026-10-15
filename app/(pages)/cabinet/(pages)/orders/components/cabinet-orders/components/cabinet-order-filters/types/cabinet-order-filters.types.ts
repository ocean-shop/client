import type {
  CabinetOrdersFilter,
  CabinetOrdersFilterId,
} from "../../../types/cabinet-orders.types";

export type CabinetOrderFilterOption = CabinetOrdersFilter & {
  count: number;
};

export type CabinetOrderFiltersProps = {
  filters: CabinetOrderFilterOption[];
  activeId: CabinetOrdersFilterId;
  onChange: (id: CabinetOrdersFilterId) => void;
};
