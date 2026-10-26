import { Button } from "@/app/ui/button/button";
import {
  CABINET_ORDER_FILTER_CLASS_NAME,
  CABINET_ORDER_FILTER_STATE_CLASS_NAMES,
} from "./constants/cabinet-order-filters.constants";
import type { CabinetOrderFiltersProps } from "./types/cabinet-order-filters.types";

export const CabinetOrderFilters = ({ filters, activeId, onChange }: CabinetOrderFiltersProps) => {
  return (
    <div className="flex gap-2 overflow-x-auto [scrollbar-width:none]">
      {filters.map((filter) => {
        const isActive = filter.id === activeId;

        return (
          <Button
            key={filter.id}
            variant="unstyled"
            size="auto"
            onClick={() => onChange(filter.id)}
            aria-pressed={isActive}
            className={`${CABINET_ORDER_FILTER_CLASS_NAME} ${
              CABINET_ORDER_FILTER_STATE_CLASS_NAMES[isActive ? "active" : "idle"]
            }`}
          >
            {filter.label}
            <span className="font-normal opacity-80">{filter.count}</span>
          </Button>
        );
      })}
    </div>
  );
};
