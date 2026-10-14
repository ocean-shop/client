import type { CartItemInput } from "@/app/shared/cart/types/cart.types";
import type { DeliveryCarrier } from "@/app/shared/delivery/types/delivery.types";
import type { OrderPaymentMethod, OrderStatus } from "@/app/shared/orders/types/orders.types";

export type UserOrderPaymentStatus = "unpaid" | "paid";

/** One order line as the backend lists it; `product` is `null` once the product is deleted. */
export type UserOrderItem = {
  orderId: string;
  productId: string;
  unitPrice: string;
  quantity: number;
  product: {
    id: string;
    name: string;
    sku: string | null;
  } | null;
};

/** An order as `orders-client/by-user` returns it. Amounts are decimal strings. */
export type UserOrder = {
  id: string;
  orderNumber: string | null;
  /** Free-form destination the checkout saved: "Нова Пошта · Відділення №34: Київ, …". */
  shippingNumber: string;
  firstName: string | null;
  lastName: string | null;
  middleName: string | null;
  email: string | null;
  phoneNumber: string | null;
  subtotalAmount: string;
  discountAmount: string;
  totalAmount: string;
  paymentMethod: OrderPaymentMethod;
  paymentStatus: UserOrderPaymentStatus;
  shippingMethod: DeliveryCarrier;
  status: OrderStatus;
  createdAt: string;
  updatedAt: string;
  items: UserOrderItem[];
};

export type UserOrdersResponse = {
  items: UserOrder[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
};

export type UserOrderStepState = "done" | "current" | "upcoming" | "cancelled";

export type UserOrderStepView = {
  label: string;
  state: UserOrderStepState;
  /** Already formatted; `null` when the backend keeps no date for the step. */
  date: string | null;
};

export type UserOrderItemView = {
  id: string;
  name: string;
  sku: string | null;
  image: string | null;
  href: string | null;
  quantity: number;
  unitPrice: number;
  sum: number;
  /** What "repeat order" puts in the cart; `null` when the product cannot be bought now. */
  cartItem: CartItemInput | null;
};

/** An order prepared on the server for both the list card and the details view. */
export type UserOrderView = {
  id: string;
  number: string;
  status: OrderStatus;
  /** Already formatted, e.g. "12 жовтня 2026 р.". */
  placedAt: string;
  quantity: number;
  items: UserOrderItemView[];
  steps: UserOrderStepView[];
  shipping: {
    carrier: string;
    address: string;
  };
  recipient: {
    name: string | null;
    phone: string | null;
    email: string | null;
  };
  payment: {
    method: string;
    note: string;
  };
  amounts: {
    subtotal: number;
    discount: number;
    delivery: number;
    total: number;
  };
};
