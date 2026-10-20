import type { MetadataRoute } from "next";
import {
  SEO_MANIFEST_BACKGROUND_COLOR,
  SEO_MANIFEST_THEME_COLOR,
  SITE_DESCRIPTION,
  SITE_NAME,
} from "./shared/seo/constants/seo.constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: SITE_NAME,
    description: SITE_DESCRIPTION,
    lang: "uk",
    start_url: "/",
    display: "standalone",
    background_color: SEO_MANIFEST_BACKGROUND_COLOR,
    theme_color: SEO_MANIFEST_THEME_COLOR,
    icons: [{ src: "/favicon.ico", sizes: "any", type: "image/x-icon" }],
  };
}
