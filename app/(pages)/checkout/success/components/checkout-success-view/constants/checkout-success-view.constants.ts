import type { CheckoutPaymentMethod } from "@/app/(pages)/checkout/types/checkout.types";

export const CHECKOUT_SUCCESS_CONTENT_CLASS_NAME =
  "mx-auto flex w-full max-w-[760px] flex-col gap-5 lg:gap-7";

export const CHECKOUT_SUCCESS_TITLE = "Дякуємо, замовлення прийнято";
export const CHECKOUT_SUCCESS_NUMBER_LABEL = "Номер замовлення";
export const CHECKOUT_SUCCESS_EMAIL_TEXT = (email: string) =>
  `. Підтвердження та трек-номер надішлемо на ${email}.`;

export const CHECKOUT_SUCCESS_DELIVERY = { icon: "local_shipping", label: "Доставка" };
export const CHECKOUT_SUCCESS_ESTIMATE = {
  icon: "event",
  label: "Очікувана дата",
  note: "Повідомимо SMS",
};
export const CHECKOUT_SUCCESS_PAYMENT = { icon: "credit_card", label: "Оплата" };

/** Payments are not processed online yet, so nothing is reported as paid. */
export const CHECKOUT_SUCCESS_PAYMENT_STATUS: Record<CheckoutPaymentMethod, string> = {
  card: "Очікує оплати",
  wallet: "Очікує оплати",
  installments: "Очікує оплати",
  invoice: "Рахунок надішлемо на email",
  cod: "Оплата при отриманні",
};

export const CHECKOUT_SUCCESS_TOTAL_LABEL = "Разом";

export const CHECKOUT_SUCCESS_CONTINUE_LABEL = "Продовжити покупки";
export const CHECKOUT_SUCCESS_CONTINUE_HREF = "/";
export const CHECKOUT_SUCCESS_ORDERS_LABEL = "Мої замовлення";

/** Accounts do not exist yet, so the button says so instead of opening an empty page. */
export const CHECKOUT_SUCCESS_ORDERS_TOAST_TITLE = "Скоро";
export const CHECKOUT_SUCCESS_ORDERS_TOAST_MESSAGE =
  "Історія замовлень буде доступна в особистому кабінеті найближчим часом.";
