import { getSearchParamValues } from "@/app/core/search-params/helpers/get-search-param-values";
import type { SearchParamValue } from "@/app/core/search-params/types/search-params.types";
import {
  CATALOG_PRODUCTS_ATTRIBUTE_GROUP_SEPARATOR,
  CATALOG_PRODUCTS_ATTRIBUTE_NAME_SEPARATOR,
  CATALOG_PRODUCTS_ATTRIBUTE_VALUE_SEPARATOR,
} from "../constants/products.constants";
import type { CatalogFilter } from "../types/products.types";

/** One `name:value1,value2` group, or `null` when it has no name or no values. */
const parseAttributeGroup = (group: string): CatalogFilter | null => {
  const separatorIndex = group.indexOf(CATALOG_PRODUCTS_ATTRIBUTE_NAME_SEPARATOR);

  if (separatorIndex <= 0) return null;

  const name = group.slice(0, separatorIndex).trim();
  const values = group
    .slice(separatorIndex + 1)
    .split(CATALOG_PRODUCTS_ATTRIBUTE_VALUE_SEPARATOR)
    .map((attributeValue) => attributeValue.trim())
    .filter(Boolean);

  return name && values.length > 0 ? { name, values } : null;
};

/** Reads `attributes=name:value1,value2` entries, repeated or joined with `;`. */
export const parseCatalogAttributesHelper = (value: SearchParamValue): CatalogFilter[] => {
  const valuesByName = new Map<string, string[]>();

  const groups = getSearchParamValues(value).flatMap((entry) =>
    entry.split(CATALOG_PRODUCTS_ATTRIBUTE_GROUP_SEPARATOR)
  );

  for (const group of groups) {
    const attribute = parseAttributeGroup(group);

    if (!attribute) continue;

    valuesByName.set(attribute.name, [
      ...(valuesByName.get(attribute.name) ?? []),
      ...attribute.values,
    ]);
  }

  return [...valuesByName].map(([name, values]) => ({ name, values: [...new Set(values)] }));
};
