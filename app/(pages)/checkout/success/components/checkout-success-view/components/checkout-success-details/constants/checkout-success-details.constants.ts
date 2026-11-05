import type { CheckoutPaymentMethod } from "@/app/(pages)/checkout/types/checkout.types";

export const CHECKOUT_SUCCESS_DELIVERY = { icon: "local_shipping", label: "Доставка" };
export const CHECKOUT_SUCCESS_ESTIMATE = {
  icon: "event",
  label: "Очікувана дата",
  note: "Повідомимо SMS",
};
export const CHECKOUT_SUCCESS_PAYMENT = { icon: "credit_card", label: "Оплата" };

/** Payments are not processed online yet, so nothing is reported as paid. */
export const CHECKOUT_SUCCESS_PAYMENT_STATUS: Record<CheckoutPaymentMethod, string> = {
  manual: "Реквізити надіслали на email",
  wallet: "Очікує оплати",
  cod: "Оплата при отриманні",
};

export const CHECKOUT_SUCCESS_TOTAL_LABEL = "Разом";
