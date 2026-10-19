export const SITE_NAME = "Ocean Shop";

/** Resolves canonical and Open Graph URLs; falls back to the dev server so builds never fail on it. */
export const SITE_URL = process.env.SITE_URL ?? "http://localhost:3000";

export const SEO_TITLE_SUFFIX = ` | ${SITE_NAME}`;

export const SEO_LOCALE = "uk_UA";

/** Search engines cut snippets at roughly this length, so derived descriptions stop here. */
export const SEO_DESCRIPTION_MAX_LENGTH = 160;

export const SEO_DESCRIPTION_ELLIPSIS = "…";
