import type { MetadataRoute } from "next";
import { SITE_DESCRIPTION, SITE_NAME } from "./shared/seo/constants/seo.constants";
import { getShopSettings } from "./shared/shop-settings/api/get-shop-settings";

// The manifest cannot read CSS variables, so it takes the shop's colors straight from the settings.
const manifest = async (): Promise<MetadataRoute.Manifest> => {
  const { colorScheme } = await getShopSettings();

  return {
    name: SITE_NAME,
    short_name: SITE_NAME,
    description: SITE_DESCRIPTION,
    lang: "uk",
    start_url: "/",
    display: "standalone",
    background_color: colorScheme.background,
    theme_color: colorScheme.accent,
    icons: [{ src: "/favicon.ico", sizes: "any", type: "image/x-icon" }],
  };
};

export default manifest;
