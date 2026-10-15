import { ORDERS_CLIENT_API_URL } from "@/app/shared/orders/constants/orders.constants";
import type { OrderPaymentMethod, OrderStatus } from "@/app/shared/orders/types/orders.types";
import type { UserOrderPaymentStatus } from "../types/orders.types";

export const ORDERS_PAGE_SIZE = 20;
export const ORDERS_PAGE_SEARCH_PARAM = "page";

export const getUserOrdersApiUrl = (userId: string, page: number) => {
  const params = new URLSearchParams({
    shopId: process.env.SHOP_ID ?? "",
    page: String(page),
    limit: String(ORDERS_PAGE_SIZE),
  });

  return `${ORDERS_CLIENT_API_URL}/by-user/${userId}?${params.toString()}`;
};

export const getUserOrderApiUrl = (orderId: string) => `${ORDERS_CLIENT_API_URL}/${orderId}`;

/** A non-uuid id, someone else's order and a missing one all end up as the same 404 page. */
export const ORDER_NOT_FOUND_STATUSES = [400, 403, 404];

/** Orders without a number of their own are shown by the start of their id, as checkout does. */
export const ORDER_SHORT_ID_LENGTH = 8;
export const ORDER_NUMBER_PREFIX = "#";

export const ORDER_DATE_FORMATTER = new Intl.DateTimeFormat("uk-UA", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "Europe/Kyiv",
});

export const ORDER_STEP_DATE_FORMATTER = new Intl.DateTimeFormat("uk-UA", {
  day: "numeric",
  month: "long",
  hour: "2-digit",
  minute: "2-digit",
  timeZone: "Europe/Kyiv",
});

/** The backend has no "delivered" status, so the trail ends once the parcel is handed over. */
export const ORDER_STEPS: { status: Exclude<OrderStatus, "cancelled">; label: string }[] = [
  { status: "pending", label: "Оформлено" },
  { status: "processing", label: "Збираємо" },
  { status: "shipped", label: "Відправлено" },
];

export const ORDER_CANCELLED_STEP_LABEL = "Скасовано";

export const ORDER_PAYMENT_METHOD_LABELS: Record<OrderPaymentMethod, string> = {
  card: "Карткою онлайн",
  cod: "Накладений платіж",
};

export const ORDER_PAYMENT_NOTES: Record<
  OrderPaymentMethod,
  Record<UserOrderPaymentStatus, string>
> = {
  card: { paid: "Оплачено", unpaid: "Очікує оплати" },
  cod: { paid: "Оплачено при отриманні", unpaid: "Оплата при отриманні" },
};

export const ORDER_NAME_SEPARATOR = " ";
