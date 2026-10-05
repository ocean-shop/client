import { DELIVERY_POPULAR_CITIES } from "@/app/shared/delivery/constants/delivery.constants";
import type {
  CheckoutCarrierOption,
  CheckoutContact,
  CheckoutDelivery,
  CheckoutPaymentMethod,
  CheckoutPaymentOption,
} from "../types/checkout.types";

export const CHECKOUT_PAGE_CLASS_NAME = "flex-1 bg-surface-soft";

export const CHECKOUT_EMPTY_CONTACT: CheckoutContact = { name: "", email: "", phone: "" };

export const CHECKOUT_DEFAULT_DELIVERY: CheckoutDelivery = {
  city: DELIVERY_POPULAR_CITIES[0],
  carrier: "nova",
  method: "branch",
  point: null,
  street: "",
  apartment: "",
};

export const CHECKOUT_DEFAULT_PAYMENT: CheckoutPaymentMethod = "card";

/**
 * The shop's own delivery tariffs. Real carrier quotes need the sender's city and parcel size,
 * which the storefront does not know yet, so a flat price per method is charged for now.
 */
export const CHECKOUT_CARRIERS: CheckoutCarrierOption[] = [
  {
    id: "nova",
    label: "Нова Пошта",
    note: "1–2 дні",
    methods: [
      { id: "branch", label: "Відділення", icon: "storefront", price: 80 },
      { id: "postomat", label: "Поштомат", icon: "inventory_2", price: 70 },
      { id: "courier", label: "Кур’єр", icon: "local_shipping", price: 120 },
    ],
    codFee: { fixed: 20, percent: 2 },
  },
  {
    id: "ukr",
    label: "Укрпошта",
    note: "2–5 днів",
    methods: [
      { id: "branch", label: "Відділення", icon: "storefront", price: 55 },
      { id: "courier", label: "Кур’єр", icon: "local_shipping", price: 90 },
    ],
    codFee: { fixed: 15, percent: 1 },
  },
];

export const CHECKOUT_PAYMENTS: CheckoutPaymentOption[] = [
  {
    id: "card",
    label: "Карткою онлайн",
    note: "Visa, Mastercard",
    badge: "credit_card",
    badgeType: "icon",
  },
  {
    id: "wallet",
    label: "Apple Pay / Google Pay",
    note: "Швидка оплата з телефону",
    badge: "Pay",
    badgeType: "text",
  },
  {
    id: "installments",
    label: "Оплата частинами",
    note: "До 4 платежів без переплат",
    badge: "0%",
    badgeType: "text",
  },
  {
    id: "cod",
    label: "Накладений платіж",
    note: "Оплата при отриманні, з комісією перевізника",
    badge: "payments",
    badgeType: "icon",
  },
  {
    id: "invoice",
    label: "Рахунок для юросіб",
    note: "Безготівкова оплата з ПДВ",
    badge: "receipt_long",
    badgeType: "icon",
  },
];

export const CHECKOUT_COD_PAYMENT: CheckoutPaymentMethod = "cod";
export const CHECKOUT_CARD_PAYMENT: CheckoutPaymentMethod = "card";

/** Order of the checks matches the order of the form, so the hint points at the first gap. */
export const CHECKOUT_VALIDATION_MESSAGES = {
  name: "Вкажіть прізвище та ім’я отримувача.",
  email: "Вкажіть коректний email.",
  phone: "Вкажіть мобільний номер у форматі +380 XX XXX XX XX.",
  point: "Оберіть відділення або поштомат.",
  street: "Вкажіть вулицю та номер будинку.",
};

export const CHECKOUT_EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
/** `+380`, `380` or a bare `0`, followed by the nine digits of a Ukrainian mobile number. */
export const CHECKOUT_PHONE_PATTERN = /^(?:\+?38)?0\d{9}$/;
export const CHECKOUT_PHONE_SEPARATORS_PATTERN = /[\s()-]/g;
export const CHECKOUT_NAME_MIN_WORDS = 2;
