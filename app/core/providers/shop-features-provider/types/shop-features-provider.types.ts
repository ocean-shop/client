import type { ShopFeatures } from "@/app/shared/shop-settings/types/shop-settings.types";

export type ShopFeaturesProviderProps = {
  features: ShopFeatures;
  children: React.ReactNode;
};
