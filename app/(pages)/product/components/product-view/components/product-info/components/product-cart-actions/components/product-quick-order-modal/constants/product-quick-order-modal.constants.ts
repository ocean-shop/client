import { PRODUCT_QUICK_ORDER_NAME_MAX_LENGTH } from "@/app/(pages)/product/constants/product-quick-order.constants";
import type { ProductQuickOrderInputField } from "../types/product-quick-order-modal.types";

/** Longest a phone can be with separators, e.g. `+380 (99) 123-45-67`. */
const PRODUCT_QUICK_ORDER_MODAL_PHONE_MAX_LENGTH = 20;

export const PRODUCT_QUICK_ORDER_MODAL_TITLE = "Купити в 1 клік";
export const PRODUCT_QUICK_ORDER_MODAL_TEXT =
  "Залиште ім’я та номер телефону — менеджер зателефонує, щоб уточнити доставку й оплату.";

export const PRODUCT_QUICK_ORDER_MODAL_INPUT_FIELDS: ProductQuickOrderInputField[] = [
  {
    name: "name",
    label: "Ім’я",
    placeholder: "Олена",
    maxLength: PRODUCT_QUICK_ORDER_NAME_MAX_LENGTH,
    autoComplete: "given-name",
    type: "text",
    inputMode: "text",
  },
  {
    name: "phone",
    label: "Телефон",
    placeholder: "+380 __ ___ __ __",
    maxLength: PRODUCT_QUICK_ORDER_MODAL_PHONE_MAX_LENGTH,
    autoComplete: "tel",
    type: "tel",
    inputMode: "tel",
  },
];

export const PRODUCT_QUICK_ORDER_MODAL_CANCEL_LABEL = "Скасувати";
export const PRODUCT_QUICK_ORDER_MODAL_SUBMIT_LABEL = "Замовити";

export const PRODUCT_QUICK_ORDER_MODAL_SUCCESS_TOAST_TITLE = "Замовлення прийнято";
export const PRODUCT_QUICK_ORDER_MODAL_SUCCESS_TOAST_MESSAGE =
  "Менеджер зателефонує вам найближчим часом.";
export const PRODUCT_QUICK_ORDER_MODAL_ERROR_TOAST_TITLE = "Не вдалося оформити замовлення";

/** Sits inside the scrolling body, so it cancels the body's side padding to span the panel. */
export const PRODUCT_QUICK_ORDER_MODAL_ACTIONS_CLASS_NAME =
  "-mx-4.5 mt-1 border-t border-surface px-4.5 py-3.5 lg:-mx-6 lg:px-6 lg:py-4";
