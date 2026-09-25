import type { CatalogCategory } from "../types/catalog-categories.types";

export function getCatalogCategoryAncestorsHelper(
  categories: CatalogCategory[],
  category: CatalogCategory
): CatalogCategory[] {
  const ancestors: CatalogCategory[] = [];
  let current: CatalogCategory | undefined = category;

  while (current?.parentId) {
    const parent = categories.find((item) => item.id === current!.parentId);
    if (!parent) break;

    ancestors.unshift(parent);
    current = parent;
  }

  return ancestors;
}
