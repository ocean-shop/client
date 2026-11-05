import type { CheckoutDeliveryMethodOption } from "@/app/(pages)/checkout/types/checkout.types";
import type { DeliveryMethod } from "@/app/shared/delivery/types/delivery.types";

export type DeliveryMethodsProps = {
  methods: CheckoutDeliveryMethodOption[];
  selectedMethod: DeliveryMethod;
  onChange: (method: DeliveryMethod) => void;
};
