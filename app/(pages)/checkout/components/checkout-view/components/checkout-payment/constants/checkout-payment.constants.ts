export const CHECKOUT_PAYMENT_STEP = 3;
export const CHECKOUT_PAYMENT_TITLE = "Оплата";

/** Layout only: card details are neither validated nor sent anywhere until payments are wired up. */
export const CHECKOUT_PAYMENT_CARD_FIELDS = {
  number: {
    label: "Номер картки",
    placeholder: "0000 0000 0000 0000",
    autoComplete: "cc-number",
    inputMode: "numeric",
  },
  expiry: { label: "Термін", placeholder: "ММ / РР", autoComplete: "cc-exp", inputMode: "numeric" },
  cvv: { label: "CVV", placeholder: "•••", autoComplete: "cc-csc", inputMode: "numeric" },
} as const;
