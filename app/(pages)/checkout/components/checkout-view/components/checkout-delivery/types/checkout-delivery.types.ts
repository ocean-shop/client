import type { CheckoutDelivery } from "@/app/(pages)/checkout/types/checkout.types";

export type CheckoutDeliveryProps = {
  delivery: CheckoutDelivery;
  onChange: (delivery: CheckoutDelivery) => void;
};

/** The parts of a delivery that decide where the parcel goes, and so which points are on offer. */
export type CheckoutDeliveryRouteChange = Partial<
  Pick<CheckoutDelivery, "city" | "carrier" | "method">
>;
