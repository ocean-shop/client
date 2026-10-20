import { DELIVERY_ENABLED_CARRIERS } from "../constants/delivery.constants";
import type { DeliveryCarrier } from "../types/delivery.types";

export function isDeliveryCarrierEnabledHelper(carrier: DeliveryCarrier): boolean {
  return DELIVERY_ENABLED_CARRIERS[carrier];
}
