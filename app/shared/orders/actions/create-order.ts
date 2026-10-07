"use server";

import { ORDERS_CLIENT_API_URL, ORDERS_REQUEST_HEADERS } from "../constants/orders.constants";
import type {
  CreateOrderInput,
  CreateOrderRequest,
  CreateOrderResult,
} from "../types/orders.types";

/** Places the order. Runs as an action because `API_BASE_URL` and `SHOP_ID` are server-only. */
export async function createOrderAction(input: CreateOrderInput): Promise<CreateOrderResult> {
  const body: CreateOrderRequest = { ...input, shopId: process.env.SHOP_ID ?? "" };

  const response = await fetch(ORDERS_CLIENT_API_URL, {
    method: "POST",
    headers: ORDERS_REQUEST_HEADERS,
    body: JSON.stringify(body),
    cache: "no-store",
  });

  if (!response.ok) return { ok: false, status: response.status };

  return { ok: true, order: await response.json() };
}
