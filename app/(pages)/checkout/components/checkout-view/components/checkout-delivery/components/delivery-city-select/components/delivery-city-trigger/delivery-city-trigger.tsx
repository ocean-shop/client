import { MaterialIcon } from "@/app/ui/material-icon/material-icon";
import type { DeliveryCityTriggerProps } from "./types/delivery-city-trigger.types";

export const DeliveryCityTrigger = ({ city, isOpen, onToggle }: DeliveryCityTriggerProps) => {
  return (
    <button
      type="button"
      aria-expanded={isOpen}
      onClick={onToggle}
      className="flex h-[46px] w-full items-center gap-2.5 rounded-[11px] border border-footer-border bg-background px-3.5 text-left hover:border-accent"
    >
      <MaterialIcon name="location_on" className="text-xl text-accent" />
      <span className="min-w-0 flex-1 truncate text-[14.5px] text-foreground">
        {city.name}
        {city.region && <span className="text-muted-light">, {city.region}</span>}
      </span>
      <MaterialIcon
        name={isOpen ? "expand_less" : "expand_more"}
        className="text-xl text-muted-light"
      />
    </button>
  );
};
