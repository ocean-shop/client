import {
  DELIVERY_ENABLED_CARRIERS,
  DELIVERY_POPULAR_CITIES,
} from "@/app/shared/delivery/constants/delivery.constants";
import type { OrderPaymentMethod } from "@/app/shared/orders/types/orders.types";
import type {
  CheckoutCarrierOption,
  CheckoutContact,
  CheckoutDelivery,
  CheckoutPaymentMethod,
  CheckoutPaymentOption,
} from "../types/checkout.types";

export const CHECKOUT_PAGE_CLASS_NAME = "flex-1 bg-surface-soft";

export const CHECKOUT_METADATA_TITLE = "Оформлення замовлення";
export const CHECKOUT_SUCCESS_METADATA_TITLE = "Замовлення прийнято";

export const CHECKOUT_EMPTY_CONTACT: CheckoutContact = { name: "", email: "", phone: "" };

export const CHECKOUT_DEFAULT_DELIVERY: CheckoutDelivery = {
  city: DELIVERY_POPULAR_CITIES[0],
  carrier: "nova",
  method: "branch",
  point: null,
  street: "",
  apartment: "",
};

export const CHECKOUT_DEFAULT_PAYMENT: CheckoutPaymentMethod = "wallet";

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
    deliveryDays: { min: 1, max: 2 },
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
    deliveryDays: { min: 2, max: 5 },
  },
];

/** Carriers offered for new orders; past orders keep their carrier's label from the full list. */
export const CHECKOUT_AVAILABLE_CARRIERS = CHECKOUT_CARRIERS.filter(
  ({ id }) => DELIVERY_ENABLED_CARRIERS[id]
);

export const CHECKOUT_PAYMENTS: CheckoutPaymentOption[] = [
  {
    id: "wallet",
    label: "Apple Pay / Google Pay",
    note: "Швидка оплата з телефону",
    badge: "Pay",
    badgeType: "text",
  },
  {
    id: "cod",
    label: "Накладений платіж",
    note: "Оплата при отриманні, з комісією перевізника",
    badge: "payments",
    badgeType: "icon",
  },
];

export const CHECKOUT_COD_PAYMENT: CheckoutPaymentMethod = "cod";

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

export const CHECKOUT_SUCCESS_PAGE_PATH = "/checkout/success";
export const CHECKOUT_PLACED_ORDER_STORAGE_KEY = "ocean-shop:placed-order";

/** The backend takes cards and cash on delivery only; wallet payments are settled as card. */
export const CHECKOUT_ORDER_PAYMENT_METHODS: Record<CheckoutPaymentMethod, OrderPaymentMethod> = {
  wallet: "card",
  cod: "cod",
};

/** The backend wants `+380XXXXXXXXX`; the form accepts the same number with or without `+38`. */
export const CHECKOUT_ORDER_PHONE_PREFIX = "+380";
export const CHECKOUT_ORDER_PHONE_DIGITS = 9;
export const CHECKOUT_ORDER_NAME_MAX_LENGTH = 100;
export const CHECKOUT_ORDER_EMAIL_MAX_LENGTH = 255;
export const CHECKOUT_ORDER_SHIPPING_MAX_LENGTH = 255;
export const CHECKOUT_ORDER_SHIPPING_SEPARATOR = ": ";
export const CHECKOUT_DELIVERY_TITLE_SEPARATOR = " · ";
export const CHECKOUT_DELIVERY_ADDRESS_SEPARATOR = ", ";
/** A branch's number, e.g. "1414" in "Поштомат №1414" or the index in "Відділення 79000". */
export const CHECKOUT_DELIVERY_POINT_NUMBER_PATTERN = /\d+/;
export const CHECKOUT_DELIVERY_DATE_FORMATTER = new Intl.DateTimeFormat("uk-UA", {
  day: "numeric",
  month: "long",
});

/** Orders without a number of their own are shown by the start of their id. */
export const CHECKOUT_ORDER_SHORT_ID_LENGTH = 8;

export const CHECKOUT_ORDER_ERROR_TOAST_TITLE = "Не вдалося оформити замовлення";
