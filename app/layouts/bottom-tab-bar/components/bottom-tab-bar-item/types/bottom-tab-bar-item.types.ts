import type { BottomTabBarItemData } from "../../../types/bottom-tab-bar.types";

export type BottomTabBarItemProps = {
  item: BottomTabBarItemData;
  isActive: boolean;
  badgeCount: number;
  onClick: () => void;
};
