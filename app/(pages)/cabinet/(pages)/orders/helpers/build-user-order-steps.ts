import {
  ORDER_CANCELLED_STEP_LABEL,
  ORDER_STEP_DATE_FORMATTER,
  ORDER_STEPS,
} from "../constants/orders.constants";
import type { UserOrder, UserOrderStepView } from "../types/orders.types";

/**
 * The backend only remembers when an order was placed and when it last changed, so those two
 * dates go to the first step and the current one; steps in between are left undated.
 */
export function buildUserOrderStepsHelper({
  status,
  createdAt,
  updatedAt,
}: UserOrder): UserOrderStepView[] {
  const placedAt = ORDER_STEP_DATE_FORMATTER.format(new Date(createdAt));
  const changedAt = ORDER_STEP_DATE_FORMATTER.format(new Date(updatedAt));

  if (status === "cancelled") {
    return [
      { label: ORDER_STEPS[0].label, state: "done", date: placedAt },
      { label: ORDER_CANCELLED_STEP_LABEL, state: "cancelled", date: changedAt },
    ];
  }

  const currentIndex = ORDER_STEPS.findIndex((step) => step.status === status);

  return ORDER_STEPS.map((step, index) => ({
    label: step.label,
    state: index < currentIndex ? "done" : index === currentIndex ? "current" : "upcoming",
    date: index === 0 ? placedAt : index === currentIndex ? changedAt : null,
  }));
}
