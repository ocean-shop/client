import type { CatalogCategory } from "../types/catalog-categories.types";

export function findCatalogCategoryBySlugHelper(
  categories: CatalogCategory[],
  slug: string
): CatalogCategory | undefined {
  return categories.find((category) => category.slug === slug);
}
