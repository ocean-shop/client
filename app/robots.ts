import type { MetadataRoute } from "next";
import {
  SEO_ROBOTS_DISALLOWED_PATHS,
  SEO_SITEMAP_PATH,
  SITE_URL,
} from "./shared/seo/constants/seo.constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: SEO_ROBOTS_DISALLOWED_PATHS,
    },
    sitemap: new URL(SEO_SITEMAP_PATH, SITE_URL).toString(),
  };
}
