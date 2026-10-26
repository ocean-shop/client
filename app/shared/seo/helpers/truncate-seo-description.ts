import { SEO_DESCRIPTION_ELLIPSIS, SEO_DESCRIPTION_MAX_LENGTH } from "../constants/seo.constants";

/** Collapses line breaks and cuts on a word boundary, so the snippet never ends mid-word. */
export const truncateSeoDescriptionHelper = (text: string): string => {
  const normalized = text.replace(/\s+/g, " ").trim();

  if (normalized.length <= SEO_DESCRIPTION_MAX_LENGTH) return normalized;

  const cut = normalized.slice(0, SEO_DESCRIPTION_MAX_LENGTH - SEO_DESCRIPTION_ELLIPSIS.length);
  const lastSpace = cut.lastIndexOf(" ");

  return `${(lastSpace > 0 ? cut.slice(0, lastSpace) : cut).replace(/[\s,.;:—-]+$/, "")}${SEO_DESCRIPTION_ELLIPSIS}`;
};
