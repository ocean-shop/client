"use server";

import { API_JSON_HEADERS, API_SHOP_ID } from "@/app/core/api/constants/api.constants";
import { readApiActionFailure } from "@/app/core/api/helpers/read-api-action-failure";
import { PRODUCT_QUICK_ORDER_API_URL } from "../constants/product-quick-order-api.constants";
import {
  PRODUCT_QUICK_ORDER_INVALID_FAILURE,
  PRODUCT_QUICK_ORDER_PRODUCT_ID_PATTERN,
  PRODUCT_QUICK_ORDER_UNAVAILABLE_FAILURE,
} from "../constants/product-quick-order.constants";
import { buildProductQuickOrderInputHelper } from "../helpers/build-product-quick-order-input";
import { validateProductQuickOrderInputHelper } from "../helpers/validate-product-quick-order-input";
import type {
  ProductQuickOrderInput,
  ProductQuickOrderRequest,
  ProductQuickOrderResult,
} from "../types/product-quick-order.types";

/**
 * Places a "buy in one click" order: the shop calls the buyer back to settle delivery and
 * payment. Open to guests, so no session is needed. Re-validates the input, since the form's
 * checks can be bypassed; never throws — failures come back as `{ ok: false }`.
 */
export const createProductQuickOrderAction = async (
  input: ProductQuickOrderInput
): Promise<ProductQuickOrderResult> => {
  if (!input || typeof input !== "object") return PRODUCT_QUICK_ORDER_INVALID_FAILURE;

  const normalized = buildProductQuickOrderInputHelper(input);

  if (
    !PRODUCT_QUICK_ORDER_PRODUCT_ID_PATTERN.test(normalized.productId) ||
    validateProductQuickOrderInputHelper(normalized)
  ) {
    return PRODUCT_QUICK_ORDER_INVALID_FAILURE;
  }

  const body: ProductQuickOrderRequest = { ...normalized, shopId: API_SHOP_ID };
  try {
    const response = await fetch(PRODUCT_QUICK_ORDER_API_URL, {
      method: "POST",
      headers: API_JSON_HEADERS,
      body: JSON.stringify(body),
      cache: "no-store",
    });

    if (!response.ok) return readApiActionFailure(response);

    return { ok: true };
  } catch {
    return PRODUCT_QUICK_ORDER_UNAVAILABLE_FAILURE;
  }
};
