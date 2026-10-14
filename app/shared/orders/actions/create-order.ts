"use server";

import { getAuthUser } from "@/app/shared/auth/helpers/get-auth-user";
import { ORDERS_CLIENT_API_URL, ORDERS_REQUEST_HEADERS } from "../constants/orders.constants";
import type {
  CreateOrderInput,
  CreateOrderRequest,
  CreateOrderResult,
} from "../types/orders.types";

/**
 * Places the order. Runs as an action because `API_BASE_URL` and `SHOP_ID` are server-only. A
 * signed-in buyer's order is tied to them, so it shows up in their cabinet.
 */
export async function createOrderAction(input: CreateOrderInput): Promise<CreateOrderResult> {
  const user = await getAuthUser();
  const body: CreateOrderRequest = {
    ...input,
    shopId: process.env.SHOP_ID ?? "",
    ...(user && { userId: user.id }),
  };

  const response = await fetch(ORDERS_CLIENT_API_URL, {
    method: "POST",
    headers: ORDERS_REQUEST_HEADERS,
    body: JSON.stringify(body),
    cache: "no-store",
  });

  if (!response.ok) return { ok: false, status: response.status };

  return { ok: true, order: await response.json() };
}
