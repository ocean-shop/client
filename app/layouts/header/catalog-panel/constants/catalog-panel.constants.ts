import type { CatalogPanelCategory, CatalogPanelPromo } from "../types/catalog-panel.types";

export const CATALOG_PANEL_CATEGORIES: CatalogPanelCategory[] = [
  {
    id: "electronics",
    label: "Електроніка",
    icon: "devices",
    subs: [
      { name: "Смартфони", count: "1 240" },
      { name: "Ноутбуки", count: "486" },
      { name: "Навушники", count: "932" },
      { name: "Планшети", count: "217" },
      { name: "Розумний дім", count: "358" },
      { name: "Аксесуари", count: "1 105" },
    ],
  },
  {
    id: "clothing",
    label: "Одяг & Взуття",
    icon: "checkroom",
    subs: [
      { name: "Жіночий одяг", count: "2 310" },
      { name: "Чоловічий одяг", count: "1 894" },
      { name: "Взуття", count: "1 042" },
      { name: "Аксесуари", count: "623" },
      { name: "Дитячий одяг", count: "745" },
    ],
  },
  {
    id: "home",
    label: "Дім & Затишок",
    icon: "chair",
    subs: [
      { name: "Меблі", count: "512" },
      { name: "Текстиль", count: "876" },
      { name: "Посуд", count: "664" },
      { name: "Декор", count: "430" },
      { name: "Освітлення", count: "289" },
    ],
  },
  {
    id: "beauty",
    label: "Краса",
    icon: "spa",
    subs: [
      { name: "Догляд за обличчям", count: "958" },
      { name: "Макіяж", count: "1 176" },
      { name: "Парфумерія", count: "412" },
      { name: "Догляд за волоссям", count: "603" },
    ],
  },
  {
    id: "sport",
    label: "Спорт",
    icon: "fitness_center",
    subs: [
      { name: "Тренажери", count: "184" },
      { name: "Спортивний одяг", count: "729" },
      { name: "Велосипеди", count: "146" },
      { name: "Туризм", count: "310" },
    ],
  },
  {
    id: "kids",
    label: "Дитячі товари",
    icon: "child_care",
    subs: [
      { name: "Іграшки", count: "1 022" },
      { name: "Дитячий транспорт", count: "198" },
      { name: "Товари для немовлят", count: "356" },
    ],
  },
  {
    id: "sales",
    label: "Акції",
    icon: "sell",
    subs: [
      { name: "Знижки тижня", count: "312" },
      { name: "Розпродаж", count: "540" },
      { name: "Останні розміри", count: "127" },
    ],
  },
];

export const CATALOG_PANEL_PROMO: CatalogPanelPromo = {
  badge: "НОВИНКА",
  title: "Ocean Flow Pro Series",
  description: "Нове покоління просторового звуку з активним заглушенням до 48 дБ.",
  price: "2 499 ₴",
  oldPrice: "3 199 ₴",
  ctaLabel: "Купити зі знижкою",
};
