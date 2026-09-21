import type { CatalogFilterGroup } from "../types/catalog-filters.types";

export const CATALOG_FILTERS_PRICE_LABEL = "Ціна, ₴";
export const CATALOG_FILTERS_PRICE_FROM_PLACEHOLDER = "від";
export const CATALOG_FILTERS_PRICE_TO_PLACEHOLDER = "до";
export const CATALOG_FILTERS_APPLY_LABEL = "Застосувати";
export const CATALOG_FILTERS_MORE_LABEL = "Показати ще";
export const CATALOG_FILTERS_VISIBLE_OPTIONS_COUNT = 4;

export const CATALOG_FILTER_GROUPS: CatalogFilterGroup[] = [
  {
    id: "brand",
    title: "Бренд",
    options: [
      { id: "brand-apple", label: "Apple", count: 24 },
      { id: "brand-samsung", label: "Samsung", count: 18 },
      { id: "brand-xiaomi", label: "Xiaomi", count: 15 },
      { id: "brand-sony", label: "Sony", count: 9 },
      { id: "brand-lg", label: "LG", count: 6 },
    ],
  },
  {
    id: "color",
    title: "Колір",
    options: [
      { id: "color-black", label: "Чорний", count: 32 },
      { id: "color-white", label: "Білий", count: 21 },
      { id: "color-gray", label: "Сірий", count: 14 },
      { id: "color-blue", label: "Синій", count: 8 },
      { id: "color-green", label: "Зелений", count: 5 },
    ],
  },
  {
    id: "availability",
    title: "Наявність",
    options: [
      { id: "availability-in-stock", label: "В наявності", count: 41 },
      { id: "availability-on-order", label: "Під замовлення", count: 12 },
    ],
  },
];
