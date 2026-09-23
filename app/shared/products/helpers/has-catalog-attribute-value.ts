import type { CatalogFilter } from "../types/products.types";

export function hasCatalogAttributeValueHelper(
  attributes: CatalogFilter[],
  name: string,
  value: string
): boolean {
  return attributes.some(
    (attribute) => attribute.name === name && attribute.values.includes(value)
  );
}
