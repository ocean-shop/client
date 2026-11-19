import type { CreateOrderResult, OrderPaymentMethod } from "../types/orders.types";

export const ORDERS_CLIENT_API_URL = `${process.env.API_BASE_URL}/orders-client`;

/** Apple Pay / Google Pay settle as card, which is open only while automatic payments are on. */
export const ORDERS_AUTOMATIC_PAYMENT_METHOD: OrderPaymentMethod = "card";

/** A malformed order, or one asking for a payment or carrier the shop has switched off. */
export const ORDERS_INVALID_INPUT_FAILURE: CreateOrderResult = { ok: false, status: 400 };
