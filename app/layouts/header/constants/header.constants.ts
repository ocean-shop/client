import type { HeaderNavItem } from "../types/header.types";

export const HEADER_BRAND_NAME = "Ocean";

export const HEADER_CATALOG_LABEL = "Каталог";

export const HEADER_SEARCH_PLACEHOLDER = "Пошук товарів";

export const HEADER_CART_COUNT = 3;

export const HEADER_NAV_ITEMS: HeaderNavItem[] = [
  { label: "Каталог", href: "/catalog", active: true },
  { label: "Електроніка", href: "/catalog/electronics" },
  { label: "Одяг & Взуття", href: "/catalog/clothing-and-shoes" },
  { label: "Дім & Затишок", href: "/catalog/home" },
  { label: "Краса", href: "/catalog/beauty" },
  { label: "Спорт", href: "/catalog/sport" },
  { label: "Акції", href: "/catalog/sales" },
];
