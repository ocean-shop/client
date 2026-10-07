import type { DeliveryCarrier } from "@/app/shared/delivery/types/delivery.types";
import { CHECKOUT_DELIVERY_DATE_FORMATTER } from "../constants/checkout.constants";
import { getCheckoutCarrierHelper } from "./get-checkout-carrier";

function addDays(date: Date, days: number) {
  const next = new Date(date);
  next.setDate(next.getDate() + days);

  return next;
}

/** Reads "8–9 жовтня": the carrier's usual delivery window counted from the day of the order. */
export function formatCheckoutDeliveryEstimateHelper(
  placedAt: string,
  carrierId: DeliveryCarrier
): string {
  const { min, max } = getCheckoutCarrierHelper(carrierId).deliveryDays;
  const placedDate = new Date(placedAt);

  return CHECKOUT_DELIVERY_DATE_FORMATTER.formatRange(
    addDays(placedDate, min),
    addDays(placedDate, max)
  );
}
