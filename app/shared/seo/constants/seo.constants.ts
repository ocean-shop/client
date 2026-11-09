import type { Metadata } from "next";

export const SITE_NAME = "Ocean Shop";

/** Resolves canonical and Open Graph URLs; falls back to the dev server so builds never fail on it. */
export const SITE_URL = process.env.SITE_URL ?? "http://localhost:3002";

export const SITE_DESCRIPTION =
  "Ocean Shop — інтернет-магазин смартфонів, планшетів, ноутбуків та аксесуарів з доставкою по Україні.";

export const SEO_TITLE_SUFFIX = ` | ${SITE_NAME}`;

/** Applied by the root layout to every plain-string title a page sets. */
export const SEO_TITLE_TEMPLATE = `%s${SEO_TITLE_SUFFIX}`;

export const SEO_LOCALE = "uk_UA";

/** Search engines cut snippets at roughly this length, so derived descriptions stop here. */
export const SEO_DESCRIPTION_MAX_LENGTH = 160;

export const SEO_DESCRIPTION_ELLIPSIS = "…";

/** Headline of the link preview when the site itself (not a product or page) is shared. */
export const SEO_SHARE_TITLE = "OCEAN MARKETPLACE";

/** Served by `app/og-image/route.tsx`: the logo tile messengers show beside the shared link. */
export const SEO_OG_IMAGE_PATH = "/og-image";

/** Square, so messengers show it as a logo thumbnail rather than a wide banner. */
export const SEO_OG_IMAGE_SIZE = { width: 512, height: 512 };

export const SEO_OG_IMAGE = {
  url: SEO_OG_IMAGE_PATH,
  ...SEO_OG_IMAGE_SIZE,
  type: "image/png",
  alt: SITE_NAME,
};

/** The site-wide card; a page setting `openGraph` replaces it whole, so the home page spreads it. */
export const SEO_DEFAULT_OPEN_GRAPH = {
  type: "website",
  siteName: SITE_NAME,
  locale: SEO_LOCALE,
  title: SEO_SHARE_TITLE,
  description: SITE_DESCRIPTION,
  images: [SEO_OG_IMAGE],
} satisfies Metadata["openGraph"];

/** For pages behind a login or tied to one visitor: kept out of the index, links still followed. */
export const SEO_NO_INDEX_METADATA: Metadata = {
  robots: { index: false, follow: true },
};

/**
 * Private and per-visitor pages. Search results are disallowed too: every term would otherwise be
 * a crawlable page of its own.
 */
export const SEO_ROBOTS_DISALLOWED_PATHS = ["/cabinet", "/checkout", "/login", "/catalog/search"];

export const SEO_SITEMAP_PATH = "/sitemap.xml";

/** The manifest cannot read CSS variables, so these mirror `--background` and `--accent`. */
export const SEO_MANIFEST_BACKGROUND_COLOR = "#ffffff";
export const SEO_MANIFEST_THEME_COLOR = "#00685f";

export const SEO_CURRENCY = "UAH";

export const SCHEMA_ORG_CONTEXT = "https://schema.org";

export const SCHEMA_ORG_IN_STOCK = "https://schema.org/InStock";

export const SCHEMA_ORG_OUT_OF_STOCK = "https://schema.org/OutOfStock";
