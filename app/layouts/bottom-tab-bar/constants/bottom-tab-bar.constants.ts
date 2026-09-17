import { HEADER_CART_COUNT } from "../../header/constants/header.constants";
import type { BottomTabBarItem } from "../types/bottom-tab-bar.types";

export const BOTTOM_TAB_BAR_ITEMS: BottomTabBarItem[] = [
  { id: "home", icon: "storefront", label: "Головна", active: true },
  { id: "catalog", icon: "apps", label: "Каталог" },
  { id: "favorites", icon: "favorite", label: "Обране" },
  { id: "account", icon: "person", label: "Кабінет" },
  { id: "cart", icon: "shopping_bag", label: "Кошик", badge: HEADER_CART_COUNT },
];
