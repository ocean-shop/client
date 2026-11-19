import {
  SHOP_SETTINGS_COLOR_CSS_VARIABLES,
  SHOP_SETTINGS_COLOR_TOKENS,
  SHOP_SETTINGS_DEFAULT_COLOR_SCHEME,
} from "../constants/shop-settings.constants";
import type { ShopColorScheme } from "../types/shop-settings.types";

/**
 * Inline style for `<html>` that overrides the `globals.css` variables with the shop's colors. It
 * ships inside the server-rendered HTML, so the first paint already has the right palette with no
 * extra request. Tokens equal to the default are skipped; `undefined` when nothing differs.
 */
export const buildShopThemeStyleHelper = (
  colorScheme: ShopColorScheme
): React.CSSProperties | undefined => {
  const style: Record<string, string> = {};

  for (const token of SHOP_SETTINGS_COLOR_TOKENS) {
    if (colorScheme[token] !== SHOP_SETTINGS_DEFAULT_COLOR_SCHEME[token]) {
      style[SHOP_SETTINGS_COLOR_CSS_VARIABLES[token]] = colorScheme[token];
    }
  }

  // React types have no slot for custom properties, though it renders them as given.
  return Object.keys(style).length ? (style as React.CSSProperties) : undefined;
};
