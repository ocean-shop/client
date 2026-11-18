import type { ShopFeatures } from "@/app/shared/shop-settings/types/shop-settings.types";
import type { DeliveryCarrier } from "../types/delivery.types";

/** Nova Poshta is always on; Ukrposhta only while the shop has switched it on in its settings. */
export const isDeliveryCarrierEnabledHelper = (
  carrier: DeliveryCarrier,
  features: ShopFeatures
): boolean => {
  return carrier !== "ukr" || features.isUkrposhtaEnabled;
};
