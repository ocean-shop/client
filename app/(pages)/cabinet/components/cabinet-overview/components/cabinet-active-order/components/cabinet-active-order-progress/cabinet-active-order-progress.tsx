import {
  CABINET_ACTIVE_ORDER_PROGRESS_EXPECTED_PREFIX,
  CABINET_ACTIVE_ORDER_PROGRESS_STEPS,
} from "./constants/cabinet-active-order-progress.constants";
import type { CabinetActiveOrderProgressProps } from "./types/cabinet-active-order-progress.types";

/** The filled bars of the delivery, with where the parcel goes and when it is expected. */
export const CabinetActiveOrderProgress = ({
  progress,
  shippingNote,
  expectedDelivery,
}: CabinetActiveOrderProgressProps) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="grid grid-cols-5 gap-1">
        {Array.from({ length: CABINET_ACTIVE_ORDER_PROGRESS_STEPS }, (_, step) => (
          <span
            key={step}
            className={`h-1.5 rounded-[3px] ${step < progress ? "bg-accent" : "bg-surface-strong"}`}
          />
        ))}
      </div>
      <div className="flex flex-col gap-1 text-[13px] text-muted lg:flex-row lg:justify-between lg:gap-2.5">
        <span>{shippingNote}</span>
        {expectedDelivery && (
          <span className="font-semibold text-foreground">
            {CABINET_ACTIVE_ORDER_PROGRESS_EXPECTED_PREFIX} {expectedDelivery}
          </span>
        )}
      </div>
    </div>
  );
};
