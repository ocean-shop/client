import type { FooterLinkColumn, FooterSupportInfo } from "../types/footer.types";

export const FOOTER_BRAND_DESCRIPTION =
  "Сучасний український маркетплейс якісних товарів зі швидкою доставкою в кожне місто України.";

export const FOOTER_LINK_COLUMNS: FooterLinkColumn[] = [
  {
    title: "Покупцям",
    links: [
      { label: "Доставка та оплата", href: "/delivery" },
      { label: "Повернення товару", href: "/returns" },
      { label: "Програма лояльності", href: "/loyalty" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Компанія",
    links: [
      { label: "Про Ocean", href: "/about" },
      { label: "Контакти", href: "/contacts" },
      { label: "Вакансії", href: "/careers" },
      { label: "Публічна оферта", href: "/terms" },
    ],
  },
];

export const FOOTER_SUPPORT: FooterSupportInfo = {
  title: "Підтримка",
  phone: "0 800 300 450",
  email: "support@ocean.ua",
  hours: "Щодня, 24/7",
};

export const FOOTER_PAYMENT_METHODS = ["VISA", "Mastercard", "Apple Pay", "Google Pay"];

export const FOOTER_COPYRIGHT = "© 2026 Ocean Shop. Всі права захищені.";
