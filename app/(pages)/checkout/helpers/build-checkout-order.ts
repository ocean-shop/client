import type { CreateOrderInput } from "@/app/shared/orders/types/orders.types";
import {
  CHECKOUT_ORDER_EMAIL_MAX_LENGTH,
  CHECKOUT_ORDER_NAME_MAX_LENGTH,
  CHECKOUT_ORDER_PAYMENT_METHODS,
  CHECKOUT_ORDER_PHONE_DIGITS,
  CHECKOUT_ORDER_PHONE_PREFIX,
  CHECKOUT_ORDER_SHIPPING_MAX_LENGTH,
  CHECKOUT_ORDER_SHIPPING_SEPARATOR,
} from "../constants/checkout.constants";
import type { CheckoutOrderDraft } from "../types/checkout.types";
import { buildCheckoutOrderItemsHelper } from "./build-checkout-order-items";
import { formatCheckoutDeliveryAddressHelper } from "./format-checkout-delivery-address";
import { roundCheckoutAmountHelper } from "./round-checkout-amount";

function trimName(value: string | undefined) {
  return value ? value.slice(0, CHECKOUT_ORDER_NAME_MAX_LENGTH) : undefined;
}

/** The ПІБ field reads "Прізвище Ім’я По батькові", the order Ukrainian forms use. */
function splitName(name: string) {
  const [lastName, firstName, ...middleNames] = name.trim().split(/\s+/);

  return {
    lastName: trimName(lastName),
    firstName: trimName(firstName),
    middleName: trimName(middleNames.join(" ")),
  };
}

/** Validation has already made sure the number ends in a `0` and nine more digits. */
function normalizePhone(phone: string) {
  return `${CHECKOUT_ORDER_PHONE_PREFIX}${phone.replace(/\D/g, "").slice(-CHECKOUT_ORDER_PHONE_DIGITS)}`;
}

/** Expects a draft that already passed `validateCheckoutFormHelper`. */
export function buildCheckoutOrderHelper({
  contact,
  delivery,
  payment,
  items,
  cartTotals,
  totals,
}: CheckoutOrderDraft): CreateOrderInput {
  const { title, address } = formatCheckoutDeliveryAddressHelper(delivery);

  return {
    ...splitName(contact.name),
    email: contact.email.trim().slice(0, CHECKOUT_ORDER_EMAIL_MAX_LENGTH),
    phoneNumber: normalizePhone(contact.phone),
    shippingNumber: `${title}${CHECKOUT_ORDER_SHIPPING_SEPARATOR}${address}`.slice(
      0,
      CHECKOUT_ORDER_SHIPPING_MAX_LENGTH
    ),
    shippingMethod: delivery.carrier,
    paymentMethod: CHECKOUT_ORDER_PAYMENT_METHODS[payment],
    subtotalAmount: roundCheckoutAmountHelper(cartTotals.subtotal),
    discountAmount: roundCheckoutAmountHelper(cartTotals.discount),
    // What the customer pays, so delivery and the cash-on-delivery fee are included.
    totalAmount: roundCheckoutAmountHelper(totals.total),
    items: buildCheckoutOrderItemsHelper(items),
  };
}
