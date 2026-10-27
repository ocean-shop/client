import type { DeliveryManualPoint } from "@/app/shared/delivery/types/delivery.types";

/** A point typed in by hand can be shipped to once both the settlement and the number are set. */
export const isCheckoutManualPointCompleteHelper = (
  manualPoint: DeliveryManualPoint | null
): manualPoint is DeliveryManualPoint => {
  return Boolean(manualPoint?.city.trim() && manualPoint.number.trim());
};
