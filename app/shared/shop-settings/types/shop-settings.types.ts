/** Storefront design tokens the admin can recolor, in the backend's camelCase naming. */
export type ShopColorToken =
  | "background"
  | "foreground"
  | "muted"
  | "mutedLight"
  | "accent"
  | "accentDark"
  | "accentSoft"
  | "accentHighlight"
  | "onAccentMuted"
  | "surfaceSoft"
  | "surface"
  | "surfaceStrong"
  | "borderSoft"
  | "footerBorder"
  | "footer"
  | "error"
  | "errorDark"
  | "errorBorder";

export type ShopColorScheme = Record<ShopColorToken, string>;

/** Body of `GET /settings/shops-client/:shopId`; read defensively, so every field is `unknown`. */
export type ShopSettingsResponse = {
  useUkrposhta?: unknown;
  usePhoneLogin?: unknown;
  useAutomaticPayment?: unknown;
  useOneClickPurchase?: unknown;
  colorScheme?: unknown;
};

/** Optional storefront features the shop admin switches on and off. */
export type ShopFeatures = {
  isUkrposhtaEnabled: boolean;
  isPhoneLoginEnabled: boolean;
  isAutomaticPaymentEnabled: boolean;
  isOneClickPurchaseEnabled: boolean;
};

export type ShopSettings = {
  features: ShopFeatures;
  colorScheme: ShopColorScheme;
};
