import type { NavDrawerGroup } from "../types/nav-drawer.types";

export const NAV_DRAWER_GROUPS: NavDrawerGroup[] = [
  {
    title: "Покупцям",
    items: [
      { label: "Доставка та оплата", href: "/delivery" },
      { label: "Повернення товару", href: "/returns" },
      { label: "Програма лояльності", href: "/loyalty" },
      { label: "Часті запитання (FAQ)", href: "/faq" },
      { label: "Відстеження замовлення", href: "/cabinet/orders" },
    ],
  },
  {
    title: "Про компанію",
    items: [
      { label: "Про Ocean", href: "/about" },
      { label: "Контакти", href: "/contacts" },
      { label: "Публічна оферта", href: "/terms" },
      // No standalone policy yet; the offer's personal-data section covers it.
      { label: "Політика конфіденційності", href: "/terms#personal-data" },
    ],
  },
];

export const NAV_DRAWER_CART_LABEL = "Кошик";

export const NAV_DRAWER_FAVORITES_LABEL = "Обране";

export const NAV_DRAWER_SUPPORT_LABEL = "Підтримка 24/7";

export const NAV_DRAWER_SUPPORT_PHONE = "0 800 300 450";

export const NAV_DRAWER_SUPPORT_EMAIL = "support@ocean.ua";
