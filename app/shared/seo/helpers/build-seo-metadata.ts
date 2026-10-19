import type { Metadata } from "next";
import { SEO_LOCALE, SEO_TITLE_SUFFIX, SITE_NAME } from "../constants/seo.constants";
import type { SeoMetadataInput } from "../types/seo.types";
import { truncateSeoDescriptionHelper } from "./truncate-seo-description";

/**
 * Admin-edited SEO fields win; everything left empty is derived from the page content. Relative
 * URLs are resolved against `metadataBase`, set once in the root layout.
 */
export function buildSeoMetadataHelper({
  title,
  description,
  path,
  images,
  metaTitle,
  metaDescription,
  canonicalUrl,
  noIndex,
}: SeoMetadataInput): Metadata {
  const resolvedTitle = `${metaTitle || title}${SEO_TITLE_SUFFIX}`;
  const resolvedDescription =
    metaDescription || (description ? truncateSeoDescriptionHelper(description) : undefined);
  const canonical = canonicalUrl || path;

  return {
    title: resolvedTitle,
    description: resolvedDescription,
    alternates: { canonical },
    robots: noIndex ? { index: false, follow: true } : undefined,
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: SEO_LOCALE,
      title: resolvedTitle,
      description: resolvedDescription,
      url: canonical,
      images,
    },
  };
}
