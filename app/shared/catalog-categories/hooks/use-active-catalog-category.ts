"use client";

import { useState } from "react";
import type { CatalogCategoryTree } from "../types/catalog-categories.types";

/** The category a catalog menu is showing; the first one until the visitor picks another. */
export const useActiveCatalogCategory = (categories: CatalogCategoryTree[]) => {
  const [activeCategoryId, setActiveCategoryId] = useState(categories[0]?.id);

  const activeCategory =
    categories.find((category) => category.id === activeCategoryId) ?? categories[0];

  return { activeCategory, setActiveCategoryId };
};
