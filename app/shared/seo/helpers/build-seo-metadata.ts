import type { Metadata } from "next";
import {
  SEO_DEFAULT_OPEN_GRAPH,
  SEO_NO_INDEX_METADATA,
  SEO_OG_IMAGE_PATH,
  SEO_TITLE_SUFFIX,
} from "../constants/seo.constants";
import type { SeoMetadataInput } from "../types/seo.types";
import { truncateSeoDescriptionHelper } from "./truncate-seo-description";

/**
 * Admin-edited SEO fields win; everything left empty is derived from the page content. Relative
 * URLs are resolved against `metadataBase`, set once in the root layout.
 */
export const buildSeoMetadataHelper = ({
  title,
  description,
  path,
  images,
  metaTitle,
  metaDescription,
  canonicalUrl,
  noIndex,
}: SeoMetadataInput): Metadata => {
  const resolvedTitle = `${metaTitle || title}${SEO_TITLE_SUFFIX}`;
  const resolvedDescription =
    metaDescription || (description ? truncateSeoDescriptionHelper(description) : undefined);
  const canonical = canonicalUrl || path;
  // Pages without a picture of their own (info pages, empty products) share the logo tile.
  const hasOwnImages = Boolean(images?.length);

  return {
    // Absolute, so the root layout's title template does not append the site name a second time.
    title: { absolute: resolvedTitle },
    description: resolvedDescription,
    alternates: { canonical },
    robots: noIndex ? SEO_NO_INDEX_METADATA.robots : undefined,
    openGraph: {
      ...SEO_DEFAULT_OPEN_GRAPH,
      title: resolvedTitle,
      description: resolvedDescription,
      url: canonical,
      images: hasOwnImages ? images : SEO_DEFAULT_OPEN_GRAPH.images,
    },
    twitter: {
      card: hasOwnImages ? "summary_large_image" : "summary",
      title: resolvedTitle,
      description: resolvedDescription,
      images: hasOwnImages ? images?.map((image) => image.url) : [SEO_OG_IMAGE_PATH],
    },
  };
};
