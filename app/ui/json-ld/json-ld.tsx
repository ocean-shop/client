import type { JsonLdProps } from "./types/json-ld.types";

/**
 * Structured data for search engines. Admin-edited strings land in the payload, so `<` is escaped
 * to keep a `</script>` inside one from closing the tag early.
 */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
