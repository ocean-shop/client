"use client";

import { ShopFeaturesContext } from "./shop-features-context";
import type { ShopFeaturesProviderProps } from "./types/shop-features-provider.types";

/** Hands the shop's feature flags, read once by the root layout, to client components. */
export const ShopFeaturesProvider = ({ features, children }: ShopFeaturesProviderProps) => {
  return <ShopFeaturesContext value={features}>{children}</ShopFeaturesContext>;
};
