import type { CatalogCategoryTree } from "@/app/shared/catalog-categories/types/catalog-categories.types";

export type CatalogCategoryItemVariant = "desktop" | "mobile";

export type CatalogCategoryItemProps = {
  variant: CatalogCategoryItemVariant;
  category: CatalogCategoryTree;
  isActive: boolean;
  /** A category with sub categories reveals them in place instead of navigating. */
  onSelect: () => void;
  /** A category with no sub categories is a plain link to its listing. */
  onNavigate: () => void;
};
