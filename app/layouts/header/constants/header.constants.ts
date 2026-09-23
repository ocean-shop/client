import type { HeaderNavItem } from "../types/header.types";

export const HEADER_BRAND_NAME = "Ocean";

export const HEADER_HOME_HREF = "/";

export const HEADER_CATALOG_LABEL = "Каталог";

export const HEADER_SEARCH_PLACEHOLDER = "Пошук товарів";

export const HEADER_CART_COUNT = 3;

export const HEADER_NAV_CATALOG_ITEM: HeaderNavItem = {
  label: "Каталог",
  href: "/catalog",
  active: true,
};

export const HEADER_NAV_SALES_ITEM: HeaderNavItem = {
  label: "Акції",
  href: "/catalog/sales",
};
