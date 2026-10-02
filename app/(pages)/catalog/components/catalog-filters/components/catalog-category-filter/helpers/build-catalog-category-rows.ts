import type { CatalogCategoryOption } from "@/app/shared/products/types/products.types";
import { CATALOG_CATEGORY_FILTER_ROOT_KEY } from "../constants/catalog-category-filter.constants";
import type { CatalogCategoryRow } from "../types/catalog-category-filter.types";

/**
 * Flattens the categories of a search into the rows of the panel: a parent is followed by
 * its children, each one level deeper, in the order the API sorted them.
 *
 * Only the categories holding a match are listed, so a child whose parent did not match
 * starts a tree of its own instead of being hidden with it.
 */
export function buildCatalogCategoryRowsHelper(
  categories: CatalogCategoryOption[]
): CatalogCategoryRow[] {
  const listedIds = new Set(categories.map((category) => category.id));
  const childrenByParentKey = new Map<string, CatalogCategoryOption[]>();

  for (const category of categories) {
    const parentKey =
      category.parentId && listedIds.has(category.parentId)
        ? category.parentId
        : CATALOG_CATEGORY_FILTER_ROOT_KEY;

    childrenByParentKey.set(parentKey, [...(childrenByParentKey.get(parentKey) ?? []), category]);
  }

  const rows: CatalogCategoryRow[] = [];
  const placedIds = new Set<string>();

  function collectRows(parentKey: string, depth: number) {
    for (const category of childrenByParentKey.get(parentKey) ?? []) {
      /** A category that is its own ancestor would otherwise recurse forever. */
      if (placedIds.has(category.id)) continue;

      placedIds.add(category.id);
      rows.push({ id: category.id, label: category.name, depth });
      collectRows(category.id, depth + 1);
    }
  }

  collectRows(CATALOG_CATEGORY_FILTER_ROOT_KEY, 0);

  /** Whatever a broken parent chain left out still belongs in the panel, at the top level. */
  for (const category of categories) {
    if (placedIds.has(category.id)) continue;

    rows.push({ id: category.id, label: category.name, depth: 0 });
  }

  return rows;
}
