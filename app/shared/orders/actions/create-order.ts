"use server";

import { API_JSON_HEADERS, API_SHOP_ID } from "@/app/core/api/constants/api.constants";
import { getAuthUser } from "@/app/shared/auth/helpers/get-auth-user";
import { getShopSettings } from "@/app/shared/shop-settings/api/get-shop-settings";
import { ORDERS_CLIENT_API_URL, ORDERS_INVALID_INPUT_FAILURE } from "../constants/orders.constants";
import { isOrderInputEnabledHelper } from "../helpers/is-order-input-enabled";
import type {
  CreateOrderInput,
  CreateOrderRequest,
  CreateOrderResult,
} from "../types/orders.types";

/**
 * Places the order. Runs as an action because `API_BASE_URL` and `SHOP_ID` are server-only. A
 * signed-in buyer's order is tied to them, so it shows up in their cabinet. A payment or carrier
 * the shop has switched off is refused with a 400.
 */
export const createOrderAction = async (input: CreateOrderInput): Promise<CreateOrderResult> => {
  const [user, { features }] = await Promise.all([getAuthUser(), getShopSettings()]);

  if (!input || typeof input !== "object" || !isOrderInputEnabledHelper(input, features)) {
    return ORDERS_INVALID_INPUT_FAILURE;
  }

  const body: CreateOrderRequest = {
    ...input,
    shopId: API_SHOP_ID,
    ...(user && { userId: user.id }),
  };

  const response = await fetch(ORDERS_CLIENT_API_URL, {
    method: "POST",
    headers: API_JSON_HEADERS,
    body: JSON.stringify(body),
    cache: "no-store",
  });

  if (!response.ok) return { ok: false, status: response.status };

  return { ok: true, order: await response.json() };
};
