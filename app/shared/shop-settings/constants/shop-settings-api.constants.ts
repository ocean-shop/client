import { API_SHOP_ID } from "@/app/core/api/constants/api.constants";

/** Server-only: the storefront's feature flags and color scheme. */
export const SHOP_SETTINGS_API_URL = `${process.env.API_BASE_URL}/settings/shops-client/${encodeURIComponent(API_SHOP_ID)}`;
