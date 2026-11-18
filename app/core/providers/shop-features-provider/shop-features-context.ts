"use client";

import { createContext } from "react";
import { SHOP_SETTINGS_FALLBACK_FEATURES } from "@/app/shared/shop-settings/constants/shop-settings.constants";
import type { ShopFeatures } from "@/app/shared/shop-settings/types/shop-settings.types";

export const ShopFeaturesContext = createContext<ShopFeatures>(SHOP_SETTINGS_FALLBACK_FEATURES);
