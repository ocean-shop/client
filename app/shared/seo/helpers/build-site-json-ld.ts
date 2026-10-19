import { FOOTER_SUPPORT } from "@/app/layouts/footer/constants/footer.constants";
import {
  CATALOG_PRODUCTS_QUERY_PARAM,
  CATALOG_SEARCH_PAGE_PATH,
} from "@/app/shared/products/constants/products.constants";
import {
  SCHEMA_ORG_CONTEXT,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "../constants/seo.constants";
import type { JsonLdData } from "../types/seo.types";

/**
 * Who runs the store and how to search it, rendered once by the root layout. The `SearchAction`
 * lets Google show a search box for the site right in its results.
 */
export function buildSiteJsonLdHelper(): JsonLdData {
  const searchUrl = new URL(CATALOG_SEARCH_PAGE_PATH, SITE_URL);
  const organizationId = `${SITE_URL}/#organization`;

  return {
    "@context": SCHEMA_ORG_CONTEXT,
    "@graph": [
      {
        "@type": "Organization",
        "@id": organizationId,
        name: SITE_NAME,
        url: SITE_URL,
        description: SITE_DESCRIPTION,
        email: FOOTER_SUPPORT.email,
        telephone: FOOTER_SUPPORT.phone,
      },
      {
        "@type": "WebSite",
        name: SITE_NAME,
        url: SITE_URL,
        inLanguage: "uk",
        publisher: { "@id": organizationId },
        potentialAction: {
          "@type": "SearchAction",
          target: `${searchUrl}?${CATALOG_PRODUCTS_QUERY_PARAM.query}={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };
}
