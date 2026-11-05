import { RadioCard } from "@/app/ui/radio-card/radio-card";
import type { DeliveryPointsListProps } from "./types/delivery-points-list.types";

export const DeliveryPointsList = ({
  label,
  points,
  selectedPointId,
  isStale,
  onSelect,
}: DeliveryPointsListProps) => {
  return (
    <div
      role="radiogroup"
      aria-label={label}
      className={`flex max-h-[360px] flex-col gap-2 overflow-y-auto transition-opacity ${
        isStale ? "opacity-60" : ""
      }`}
    >
      {points.map((point) => (
        <RadioCard
          key={point.id}
          isSelected={point.id === selectedPointId}
          onSelect={() => onSelect(point)}
          disabled={isStale}
          className="items-start px-3.5 py-3"
        >
          <span className="flex min-w-0 flex-1 flex-col gap-[3px]">
            <span className="text-sm font-semibold">{point.title}</span>
            <span className="text-[13.5px] text-muted">{point.address}</span>
            {point.meta && <span className="text-[12.5px] text-muted-light">{point.meta}</span>}
          </span>
        </RadioCard>
      ))}
    </div>
  );
};
