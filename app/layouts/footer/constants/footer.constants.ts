import { SUPPORT_EMAIL, SUPPORT_PHONE } from "@/app/shared/support/constants/support.constants";
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
      { label: "Публічна оферта", href: "/terms" },
    ],
  },
];

export const FOOTER_SUPPORT: FooterSupportInfo = {
  title: "Підтримка",
  phone: SUPPORT_PHONE,
  email: SUPPORT_EMAIL,
  hours: "Щодня, 24/7",
};

const FOOTER_CARD_PAYMENT_METHODS = ["VISA", "Mastercard"];
const FOOTER_WALLET_PAYMENT_METHODS = ["Apple Pay", "Google Pay"];
const FOOTER_PAYMENT_METHODS_SEPARATOR = " · ";

/** Apple Pay / Google Pay are listed only while the shop has automatic payments on. */
export const FOOTER_PAYMENT_METHODS_LABELS = {
  withWallets: [...FOOTER_CARD_PAYMENT_METHODS, ...FOOTER_WALLET_PAYMENT_METHODS].join(
    FOOTER_PAYMENT_METHODS_SEPARATOR
  ),
  cardsOnly: FOOTER_CARD_PAYMENT_METHODS.join(FOOTER_PAYMENT_METHODS_SEPARATOR),
};

export const FOOTER_COPYRIGHT = "© 2026 Ocean Shop. Всі права захищені.";
