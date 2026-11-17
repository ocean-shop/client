import type { ApiActionMessageFailure } from "@/app/core/api/types/api.types";
import type { ProductQuickOrderField } from "../types/product-quick-order.types";

/** Matches the backend's `QUICK_ORDER_NAME_MAX_LENGTH` (`quick_orders.name VARCHAR(100)`). */
export const PRODUCT_QUICK_ORDER_NAME_MAX_LENGTH = 100;

/** The backend's `UKRAINIAN_PHONE_REGEX`: `+380`, `380` or `0` followed by nine digits. */
export const PRODUCT_QUICK_ORDER_PHONE_PATTERN = /^(?:\+380|380|0)\d{9}$/;
export const PRODUCT_QUICK_ORDER_PHONE_SEPARATORS_PATTERN = /[\s()-]/g;
export const PRODUCT_QUICK_ORDER_PRODUCT_ID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export const PRODUCT_QUICK_ORDER_VALIDATION_MESSAGES: Record<ProductQuickOrderField, string> = {
  name: "Вкажіть ім’я.",
  phone: "Вкажіть мобільний номер у форматі +380 XX XXX XX XX.",
};

/** Returned by the action when the input fails the same checks the form runs. */
export const PRODUCT_QUICK_ORDER_INVALID_FAILURE: ApiActionMessageFailure = {
  ok: false,
  status: 400,
  message: "Перевірте ім’я та номер телефону.",
};

/** Returned by the action when the backend cannot be reached at all. */
export const PRODUCT_QUICK_ORDER_UNAVAILABLE_FAILURE: ApiActionMessageFailure = {
  ok: false,
  status: 503,
  message: null,
};
