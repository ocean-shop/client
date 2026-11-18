import { cache } from "react";
import { API_DEFAULT_REVALIDATE_SECONDS } from "@/app/core/api/constants/api.constants";
import { fetchApiOrFallback } from "@/app/core/api/fetch-api-or-fallback";
import { SHOP_SETTINGS_API_URL } from "../constants/shop-settings-api.constants";
import { parseShopSettingsHelper } from "../helpers/parse-shop-settings";
import type { ShopSettings, ShopSettingsResponse } from "../types/shop-settings.types";

/**
 * Feature flags and color scheme, read by the root layout for every page. Served from the Next
 * data cache like the catalog reads, so pages stay static/ISR and no render waits on the API once
 * it is warm; `cache` dedupes the layout, pages and actions within one request. Never throws.
 */
export const getShopSettings = cache(async (): Promise<ShopSettings> => {
  const response = await fetchApiOrFallback<ShopSettingsResponse | null>(
    SHOP_SETTINGS_API_URL,
    { next: { revalidate: API_DEFAULT_REVALIDATE_SECONDS } },
    null
  );

  return parseShopSettingsHelper(response);
});
