import type { InfoMenuGroup } from "../types/info.types";

export const INFO_PAGE_CLASS_NAME = "flex flex-1 flex-col bg-surface-soft";

export const INFO_HOME_LABEL = "Головна";
export const INFO_HOME_PATH = "/";

export const INFO_DELIVERY_PATH = "/delivery";
export const INFO_RETURNS_PATH = "/returns";
export const INFO_LOYALTY_PATH = "/loyalty";
export const INFO_FAQ_PATH = "/faq";
export const INFO_ABOUT_PATH = "/about";
export const INFO_CONTACTS_PATH = "/contacts";
export const INFO_TERMS_PATH = "/terms";

export const INFO_MENU_GROUPS: InfoMenuGroup[] = [
  {
    title: "Покупцям",
    href: INFO_DELIVERY_PATH,
    items: [
      {
        href: INFO_DELIVERY_PATH,
        icon: "local_shipping",
        label: "Доставка та оплата",
        shortLabel: "Доставка",
      },
      {
        href: INFO_RETURNS_PATH,
        icon: "assignment_return",
        label: "Повернення товару",
        shortLabel: "Повернення",
      },
      { href: INFO_LOYALTY_PATH, icon: "loyalty", label: "Ocean Club", shortLabel: "Ocean Club" },
      { href: INFO_FAQ_PATH, icon: "help", label: "Часті запитання", shortLabel: "FAQ" },
    ],
  },
  {
    title: "Компанія",
    href: INFO_ABOUT_PATH,
    items: [
      { href: INFO_ABOUT_PATH, icon: "info", label: "Про Ocean", shortLabel: "Про нас" },
      { href: INFO_CONTACTS_PATH, icon: "call", label: "Контакти", shortLabel: "Контакти" },
      { href: INFO_TERMS_PATH, icon: "gavel", label: "Публічна оферта", shortLabel: "Оферта" },
    ],
  },
];
