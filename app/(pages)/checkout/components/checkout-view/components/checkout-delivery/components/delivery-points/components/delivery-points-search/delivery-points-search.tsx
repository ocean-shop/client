import { Input } from "@/app/ui/input/input";
import { MaterialIcon } from "@/app/ui/material-icon/material-icon";
import { DELIVERY_POINTS_SEARCH_PLACEHOLDER } from "./constants/delivery-points-search.constants";
import type { DeliveryPointsSearchProps } from "./types/delivery-points-search.types";

export const DeliveryPointsSearch = ({ value, onChange }: DeliveryPointsSearchProps) => {
  return (
    <div className="relative">
      <MaterialIcon
        name="search"
        className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-xl text-muted-light"
      />
      <Input
        variant="outline"
        size="xl"
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={DELIVERY_POINTS_SEARCH_PLACEHOLDER}
        className="pl-11"
      />
    </div>
  );
};
