import type { CatalogCategoryTree } from "@/app/shared/catalog-categories/types/catalog-categories.types";

export type BottomTabBarProps = {
  categories: CatalogCategoryTree[];
};

export type BottomTabBarItem = {
  id: string;
  icon: string;
  label: string;
  active?: boolean;
  badge?: number;
};
