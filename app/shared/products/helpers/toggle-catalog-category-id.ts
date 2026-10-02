/** Ticking a category adds it to the selection, ticking it again takes it out. */
export function toggleCatalogCategoryIdHelper(categoryIds: string[], categoryId: string): string[] {
  return categoryIds.includes(categoryId)
    ? categoryIds.filter((selectedId) => selectedId !== categoryId)
    : [...categoryIds, categoryId];
}
