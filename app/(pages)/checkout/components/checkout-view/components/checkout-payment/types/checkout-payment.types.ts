import type { CheckoutPaymentMethod } from "@/app/(pages)/checkout/types/checkout.types";

export type CheckoutPaymentProps = {
  payment: CheckoutPaymentMethod;
  onChange: (payment: CheckoutPaymentMethod) => void;
};
