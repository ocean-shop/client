import type { CheckoutDelivery } from "@/app/(pages)/checkout/types/checkout.types";

export type CheckoutDeliveryProps = {
  delivery: CheckoutDelivery;
  onChange: (delivery: CheckoutDelivery) => void;
};
