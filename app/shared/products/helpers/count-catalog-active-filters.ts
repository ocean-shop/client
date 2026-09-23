import type { CatalogProductsQuery } from "../types/products.types";

/** Number of applied filters, shown as a badge on the mobile filters button. */
export function countCatalogActiveFiltersHelper(query: CatalogProductsQuery): number {
  const attributesCount = query.attributes.reduce(
    (count, attribute) => count + attribute.values.length,
    0
  );

  const priceCount = query.priceFrom !== undefined || query.priceTo !== undefined ? 1 : 0;
  const availableCount = query.available ? 1 : 0;

  return attributesCount + priceCount + availableCount;
}
