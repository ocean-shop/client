import { SHOP_SETTINGS_FALLBACK } from "../constants/shop-settings.constants";
import type { ShopSettings, ShopSettingsResponse } from "../types/shop-settings.types";
import { parseShopColorSchemeHelper } from "./parse-shop-color-scheme";

/** A feature is on only when the backend says exactly `true`; a broken body degrades to defaults. */
export const parseShopSettingsHelper = (response: ShopSettingsResponse | null): ShopSettings => {
  if (!response || typeof response !== "object") return SHOP_SETTINGS_FALLBACK;

  return {
    features: {
      isUkrposhtaEnabled: response.useUkrposhta === true,
      isPhoneLoginEnabled: response.usePhoneLogin === true,
      isAutomaticPaymentEnabled: response.useAutomaticPayment === true,
      isOneClickPurchaseEnabled: response.useOneClickPurchase === true,
    },
    colorScheme: parseShopColorSchemeHelper(response.colorScheme),
  };
};
