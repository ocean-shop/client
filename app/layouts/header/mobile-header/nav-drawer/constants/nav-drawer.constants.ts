import { CATALOG_PANEL_CATEGORIES } from "../../../catalog-panel/constants/catalog-panel.constants";
import type { NavDrawerGroup } from "../types/nav-drawer.types";

export const NAV_DRAWER_GROUPS: NavDrawerGroup[] = CATALOG_PANEL_CATEGORIES.map((category) => ({
  title: category.label,
  items: category.subs.map((sub) => sub.name),
}));

export const NAV_DRAWER_CART_LABEL = "Кошик";

export const NAV_DRAWER_FAVORITES_LABEL = "Обране";

export const NAV_DRAWER_SUPPORT_LABEL = "Підтримка 24/7";

export const NAV_DRAWER_SUPPORT_PHONE = "0 800 300 450";

export const NAV_DRAWER_SUPPORT_EMAIL = "support@ocean.ua";
