import type { ContactsChannel } from "../components/contacts-channels/types/contacts-channels.types";
import type { ContactsRequisite } from "../components/contacts-requisites/types/contacts-requisites.types";

export const CONTACTS_TITLE = "Контакти";
export const CONTACTS_LEAD =
  "Служба підтримки працює щодня з 8:00 до 21:00. Середній час відповіді в месенджерах — 5 хвилин.";

export const CONTACTS_CHANNELS: ContactsChannel[] = [
  {
    icon: "call",
    label: "Безкоштовно по Україні",
    value: "0 800 300 500",
    href: "tel:0800300500",
    note: "Щодня 8:00–21:00",
  },
  {
    icon: "chat",
    label: "Telegram і Viber",
    value: "@ocean_shop_ua",
    href: "https://t.me/ocean_shop_ua",
    note: "Щодня 8:00–21:00",
  },
  {
    icon: "mail",
    label: "Email",
    value: "help@ocean.ua",
    href: "mailto:help@ocean.ua",
    note: "Відповідаємо протягом 2 годин",
  },
  {
    icon: "handshake",
    label: "Для бізнесу та партнерів",
    value: "b2b@ocean.ua",
    href: "mailto:b2b@ocean.ua",
    note: "Оптові замовлення, рахунки з ПДВ",
  },
];

export const CONTACTS_SHOWROOM_TITLE = "Шоурум у Києві";
export const CONTACTS_SHOWROOM_LINES = [
  "вул. Велика Васильківська, 100, Київ, 03150",
  "Пн–Нд 10:00–21:00 · 5 хв від м. Палац «Україна»",
];

export const CONTACTS_FORM_TITLE = "Напишіть нам";

export const CONTACTS_CLIENT_API_URL = `${process.env.API_BASE_URL}/user/client/contacts`;
export const CONTACTS_REQUEST_HEADERS = { "Content-Type": "application/json" };

export const CONTACTS_REQUISITES_TITLE = "Реквізити";

export const CONTACTS_REQUISITES: ContactsRequisite[] = [
  { label: "Повна назва", value: "ТОВ «Оушен Шоп»" },
  { label: "Код ЄДРПОУ", value: "44518302" },
  { label: "Юридична адреса", value: "Київ, вул. Велика Васильківська, 100" },
  { label: "IBAN", value: "UA21 3052 9900 0002 6007 0156 1234" },
  { label: "Банк", value: "АТ КБ «ПриватБанк»" },
  { label: "Платник ПДВ", value: "ІПН 445183026539" },
];
