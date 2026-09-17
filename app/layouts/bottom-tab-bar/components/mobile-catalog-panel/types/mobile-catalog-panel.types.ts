import type { CatalogCategoryTree } from "@/app/shared/catalog-categories/types/catalog-categories.types";

export type MobileCatalogPanelProps = {
  categories: CatalogCategoryTree[];
  isOpen: boolean;
  onClose: () => void;
};
