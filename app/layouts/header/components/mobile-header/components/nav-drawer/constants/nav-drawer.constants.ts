import { CABINET_ORDERS_PATH } from "@/app/(pages)/cabinet/constants/cabinet.constants";
import type { NavDrawerGroup } from "../types/nav-drawer.types";

export const NAV_DRAWER_CLOSE_LABEL = "Закрити меню";

export const NAV_DRAWER_GROUPS: NavDrawerGroup[] = [
  {
    title: "Покупцям",
    items: [
      { label: "Доставка та оплата", href: "/delivery" },
      { label: "Повернення товару", href: "/returns" },
      { label: "Програма лояльності", href: "/loyalty" },
      { label: "Часті запитання (FAQ)", href: "/faq" },
      { label: "Відстеження замовлення", href: CABINET_ORDERS_PATH },
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
