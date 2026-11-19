import type {
  ShopColorScheme,
  ShopColorToken,
  ShopFeatures,
  ShopSettings,
} from "../types/shop-settings.types";

/**
 * Used when the settings request fails: every optional feature off, so the storefront never offers
 * something the shop may not support. Email login, Nova Poshta and manual payment always remain.
 */
export const SHOP_SETTINGS_FALLBACK_FEATURES: ShopFeatures = {
  isUkrposhtaEnabled: false,
  isPhoneLoginEnabled: false,
  isAutomaticPaymentEnabled: false,
  isOneClickPurchaseEnabled: false,
};

/**
 * The palette `app/globals.css` ships with — keep the two in sync. Only tokens that differ from it
 * are written onto `<html>`, so an untouched shop renders exactly the static stylesheet.
 */
export const SHOP_SETTINGS_DEFAULT_COLOR_SCHEME: ShopColorScheme = {
  background: "#ffffff",
  foreground: "#111c2d",
  muted: "#3d4947",
  mutedLight: "#5f6c69",
  accent: "#00685f",
  accentDark: "#00473f",
  accentSoft: "#e0efea",
  accentHighlight: "#89f5e7",
  onAccentMuted: "#cdeee5",
  surfaceSoft: "#f4f9f7",
  surface: "#edf5f2",
  surfaceStrong: "#d7e9e3",
  borderSoft: "#dcebe7",
  footerBorder: "#cfe0da",
  footer: "#e6f0ec",
  error: "#e5484d",
  errorDark: "#b42318",
  errorBorder: "#f6d0ce",
};

/** The CSS custom property in `app/globals.css` each token overrides. */
export const SHOP_SETTINGS_COLOR_CSS_VARIABLES: Record<ShopColorToken, string> = {
  background: "--background",
  foreground: "--foreground",
  muted: "--muted",
  mutedLight: "--muted-light",
  accent: "--accent",
  accentDark: "--accent-dark",
  accentSoft: "--accent-soft",
  accentHighlight: "--accent-highlight",
  onAccentMuted: "--on-accent-muted",
  surfaceSoft: "--surface-soft",
  surface: "--surface",
  surfaceStrong: "--surface-strong",
  borderSoft: "--border-soft",
  footerBorder: "--footer-border",
  footer: "--footer",
  error: "--error",
  errorDark: "--error-dark",
  errorBorder: "--error-border",
};

export const SHOP_SETTINGS_COLOR_TOKENS = Object.keys(
  SHOP_SETTINGS_COLOR_CSS_VARIABLES
) as ShopColorToken[];

/** Six-digit hex only, as the backend validates; anything else falls back to the default token. */
export const SHOP_SETTINGS_HEX_COLOR_PATTERN = /^#[0-9a-fA-F]{6}$/;

export const SHOP_SETTINGS_FALLBACK: ShopSettings = {
  features: SHOP_SETTINGS_FALLBACK_FEATURES,
  colorScheme: SHOP_SETTINGS_DEFAULT_COLOR_SCHEME,
};
