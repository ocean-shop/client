import { Input } from "@/app/ui/input/input";
import { DELIVERY_CITY_MENU_SEARCH_PLACEHOLDER } from "./constants/delivery-city-menu.constants";
import type { DeliveryCityMenuProps } from "./types/delivery-city-menu.types";

export const DeliveryCityMenu = ({
  searchTerm,
  onSearchTermChange,
  status,
  options,
  selectedCityId,
  onSelect,
}: DeliveryCityMenuProps) => {
  return (
    <div className="absolute inset-x-0 top-[52px] z-10 flex flex-col gap-1 rounded-xl border border-border-soft bg-background p-1.5 shadow-popover">
      <Input
        variant="outline"
        size="md"
        autoFocus
        value={searchTerm}
        onChange={(event) => onSearchTermChange(event.target.value)}
        placeholder={DELIVERY_CITY_MENU_SEARCH_PLACEHOLDER}
      />

      {status && <span className="px-3 pt-1.5 text-[12.5px] text-muted-light">{status}</span>}

      <div className="flex max-h-[280px] flex-col overflow-y-auto">
        {options.map((option) => (
          <button
            key={option.id}
            type="button"
            onClick={() => onSelect(option)}
            className={`flex items-center justify-between gap-3 rounded-[9px] px-3 py-2.5 text-left text-sm text-foreground hover:bg-surface ${
              option.id === selectedCityId ? "bg-surface font-semibold" : "font-normal"
            }`}
          >
            <span>{option.name}</span>
            <span className="text-right text-[12.5px] font-normal text-muted-light">
              {option.region}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};
