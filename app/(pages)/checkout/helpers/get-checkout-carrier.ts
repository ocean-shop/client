import type { DeliveryCarrier } from "@/app/shared/delivery/types/delivery.types";
import { CHECKOUT_CARRIERS } from "../constants/checkout.constants";

export function getCheckoutCarrierHelper(carrierId: DeliveryCarrier) {
  return CHECKOUT_CARRIERS.find((carrier) => carrier.id === carrierId) ?? CHECKOUT_CARRIERS[0];
}
