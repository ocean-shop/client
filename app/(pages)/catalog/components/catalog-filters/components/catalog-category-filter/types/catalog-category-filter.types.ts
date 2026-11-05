import type { CatalogCategoryOption } from "@/app/shared/products/types/products.types";
import type { CatalogFilterVariant } from "../../../types/catalog-filters.types";

/** One line of the panel: a category and how deep it sits in the tree. */
export type CatalogCategoryRow = {
  id: string;
  label: string;
  depth: number;
};

export type CatalogCategoryFilterProps = {
  variant: CatalogFilterVariant;
  categories: CatalogCategoryOption[];
  selectedIds: string[];
  onToggle: (categoryId: string) => void;
};
