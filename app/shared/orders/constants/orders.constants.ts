export const ORDERS_CLIENT_API_URL = `${process.env.API_BASE_URL}/orders-client`;

export const ORDERS_REQUEST_HEADERS = { "Content-Type": "application/json" };

/**
 * Whether Apple Pay / Google Pay are offered. Public, so client forms see the same value as the
 * server; stays on unless the flag is explicitly "false".
 */
export const ORDERS_AUTOMATIC_PAYMENT_ENABLED =
  process.env.NEXT_PUBLIC_AUTOMATIC_PAYMENT_ENABLED !== "false";
