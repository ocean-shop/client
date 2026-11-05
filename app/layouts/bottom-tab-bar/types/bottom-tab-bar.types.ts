import type { CatalogCategoryTree } from "@/app/shared/catalog-categories/types/catalog-categories.types";

export type BottomTabBarProps = {
  categories: CatalogCategoryTree[];
};

export type BottomTabBarItemId = "home" | "catalog" | "favorites" | "account" | "cart";

export type BottomTabBarItemData = {
  id: BottomTabBarItemId;
  icon: string;
  label: string;
};

export type BottomTabBarActiveItemsParams = {
  pathname: string;
  isCatalogOpen: boolean;
  isCartOpen: boolean;
};
