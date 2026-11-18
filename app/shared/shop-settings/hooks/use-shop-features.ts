"use client";

import { use } from "react";
import { ShopFeaturesContext } from "@/app/core/providers/shop-features-provider/shop-features-context";

/** The shop's feature flags in client components; server code reads `getShopSettings()` instead. */
export const useShopFeatures = () => use(ShopFeaturesContext);
