import type { ShopFeatures } from "@/app/shared/shop-settings/types/shop-settings.types";
import type { LoginIdentifierMode } from "../types/login.types";

export const getLoginIdentifierModeHelper = ({
  isPhoneLoginEnabled,
}: ShopFeatures): LoginIdentifierMode => {
  return isPhoneLoginEnabled ? "emailOrPhone" : "email";
};
