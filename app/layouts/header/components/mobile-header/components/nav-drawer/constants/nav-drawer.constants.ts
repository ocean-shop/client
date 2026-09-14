import type { NavDrawerGroup } from "../types/nav-drawer.types";

export const NAV_DRAWER_GROUPS: NavDrawerGroup[] = [
  {
    title: "Покупцям",
    items: [
      "Доставка та оплата",
      "Повернення товару",
      "Програма лояльності",
      "Часті запитання (FAQ)",
      "Відстеження замовлення",
    ],
  },
  {
    title: "Про компанію",
    items: ["Про Ocean", "Контакти", "Вакансії", "Публічна оферта", "Політика конфіденційності"],
  },
];

export const NAV_DRAWER_CART_LABEL = "Кошик";

export const NAV_DRAWER_FAVORITES_LABEL = "Обране";

export const NAV_DRAWER_SUPPORT_LABEL = "Підтримка 24/7";

export const NAV_DRAWER_SUPPORT_PHONE = "0 800 300 450";

export const NAV_DRAWER_SUPPORT_EMAIL = "support@ocean.ua";
