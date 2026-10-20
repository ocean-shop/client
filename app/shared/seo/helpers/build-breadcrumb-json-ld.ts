import type { BreadcrumbItem } from "@/app/ui/breadcrumb/types/breadcrumb.types";
import { SCHEMA_ORG_CONTEXT, SITE_URL } from "../constants/seo.constants";
import type { JsonLdData } from "../types/seo.types";

/** The visible breadcrumb trail as a `BreadcrumbList`; the current page, which has no link, ends it. */
export function buildBreadcrumbJsonLdHelper(items: BreadcrumbItem[]): JsonLdData {
  return {
    "@context": SCHEMA_ORG_CONTEXT,
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href ? new URL(item.href, SITE_URL).toString() : undefined,
    })),
  };
}
