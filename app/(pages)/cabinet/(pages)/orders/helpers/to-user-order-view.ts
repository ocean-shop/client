import type { ProductDetails } from "@/app/shared/products/types/products.types";
import { formatCabinetPhoneHelper } from "../../../helpers/format-cabinet-phone";
import { SHIPPING_CARRIER_LABELS } from "../../addresses/constants/addresses.constants";
import {
  ORDER_DATE_FORMATTER,
  ORDER_NAME_SEPARATOR,
  ORDER_NUMBER_PREFIX,
  ORDER_PAYMENT_METHOD_LABELS,
  ORDER_PAYMENT_NOTES,
  ORDER_SHORT_ID_LENGTH,
} from "../constants/orders.constants";
import type { UserOrder, UserOrderView } from "../types/orders.types";
import { buildUserOrderStepsHelper } from "./build-user-order-steps";
import { toUserOrderItemViewHelper } from "./to-user-order-item-view";

/** Checkout folds delivery and the cash-on-delivery fee into the total, so they are what is left over. */
const getDeliveryAmount = ({ subtotalAmount, discountAmount, totalAmount }: UserOrder) => {
  const delivery = Number(totalAmount) - Number(subtotalAmount) + Number(discountAmount);

  return Math.max(0, Math.round(delivery * 100) / 100);
};

export const toUserOrderViewHelper = (
  order: UserOrder,
  products: Map<string, ProductDetails>
): UserOrderView => {
  const name = [order.lastName, order.firstName, order.middleName]
    .filter(Boolean)
    .join(ORDER_NAME_SEPARATOR);

  return {
    id: order.id,
    number: `${ORDER_NUMBER_PREFIX}${
      order.orderNumber ?? order.id.slice(0, ORDER_SHORT_ID_LENGTH).toUpperCase()
    }`,
    status: order.status,
    placedAt: ORDER_DATE_FORMATTER.format(new Date(order.createdAt)),
    quantity: order.items.reduce((sum, item) => sum + item.quantity, 0),
    items: order.items.map((item) => toUserOrderItemViewHelper(item, products.get(item.productId))),
    steps: buildUserOrderStepsHelper(order),
    shipping: {
      carrier: SHIPPING_CARRIER_LABELS[order.shippingMethod],
      address: order.shippingNumber,
    },
    recipient: {
      name: name || null,
      phone: order.phoneNumber ? formatCabinetPhoneHelper(order.phoneNumber) : null,
      email: order.email,
    },
    payment: {
      method: ORDER_PAYMENT_METHOD_LABELS[order.paymentMethod],
      note: ORDER_PAYMENT_NOTES[order.paymentMethod][order.paymentStatus],
    },
    amounts: {
      subtotal: Number(order.subtotalAmount),
      discount: Number(order.discountAmount),
      delivery: getDeliveryAmount(order),
      total: Number(order.totalAmount),
    },
  };
};
