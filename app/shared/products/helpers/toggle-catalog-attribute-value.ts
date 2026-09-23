import type { CatalogFilter } from "../types/products.types";

export function toggleCatalogAttributeValueHelper(
  attributes: CatalogFilter[],
  name: string,
  value: string
): CatalogFilter[] {
  if (!attributes.some((attribute) => attribute.name === name)) {
    return [...attributes, { name, values: [value] }];
  }

  return attributes
    .map((attribute) => {
      if (attribute.name !== name) return attribute;

      const values = attribute.values.includes(value)
        ? attribute.values.filter((attributeValue) => attributeValue !== value)
        : [...attribute.values, value];

      return { name, values };
    })
    .filter((attribute) => attribute.values.length > 0);
}
