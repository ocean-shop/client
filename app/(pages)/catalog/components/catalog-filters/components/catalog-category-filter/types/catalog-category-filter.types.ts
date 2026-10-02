import type { CatalogCategoryOption } from "@/app/shared/products/types/products.types";

/** One line of the panel: a category and how deep it sits in the tree. */
export type CatalogCategoryRow = {
  id: string;
  label: string;
  depth: number;
};

export type CatalogCategoryFilterProps = {
  categories: CatalogCategoryOption[];
  selectedIds: string[];
  onToggle: (categoryId: string) => void;
  /** The panel is a card on desktop and a section of the filters sheet on mobile. */
  className?: string;
  rowWrapperClassName?: string;
};
