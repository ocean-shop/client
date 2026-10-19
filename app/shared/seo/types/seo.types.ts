/** SEO overrides edited in the admin; each one falls back to a value derived from the content. */
export type SeoFields = {
  metaTitle: string | null;
  metaDescription: string | null;
  /** Absolute URL, or a path resolved against the site URL. */
  canonicalUrl: string | null;
  noIndex: boolean;
};

export type SeoImage = {
  url: string;
  alt: string;
};

export type SeoMetadataInput = Partial<SeoFields> & {
  /** Shown when no `metaTitle` is set; the site name is appended either way. */
  title: string;
  /** Plain text shown when no `metaDescription` is set; trimmed to snippet length. */
  description?: string | null;
  /** The page's own path, the canonical URL when no `canonicalUrl` is set. */
  path: string;
  images?: SeoImage[];
};

/** A schema.org node serialized into a `<script type="application/ld+json">` tag. */
export type JsonLdData = { "@context": string } & Record<string, unknown>;
