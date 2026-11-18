import {
  SHOP_SETTINGS_COLOR_TOKENS,
  SHOP_SETTINGS_DEFAULT_COLOR_SCHEME,
  SHOP_SETTINGS_HEX_COLOR_PATTERN,
} from "../constants/shop-settings.constants";
import type { ShopColorScheme, ShopColorToken } from "../types/shop-settings.types";

/**
 * Every token filled: valid hex colors from the backend win, the default covers anything missing
 * or malformed. Values are written into an inline style, so only strict hex is let through.
 */
export const parseShopColorSchemeHelper = (value: unknown): ShopColorScheme => {
  const scheme: ShopColorScheme = { ...SHOP_SETTINGS_DEFAULT_COLOR_SCHEME };

  if (!value || typeof value !== "object") return scheme;

  const source = value as Partial<Record<ShopColorToken, unknown>>;

  for (const token of SHOP_SETTINGS_COLOR_TOKENS) {
    const color = source[token];

    if (typeof color === "string" && SHOP_SETTINGS_HEX_COLOR_PATTERN.test(color)) {
      scheme[token] = color.toLowerCase();
    }
  }

  return scheme;
};
