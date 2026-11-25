import {
  PRODUCT_REVIEW_COMMENT_MAX_LENGTH,
  PRODUCT_REVIEW_COMMENT_MIN_LENGTH,
  PRODUCT_REVIEW_NAME_MAX_LENGTH,
  PRODUCT_REVIEW_PROS_CONS_MAX_LENGTH,
} from "@/app/(pages)/product/constants/product-review.constants";
import type { ProductReviewFormInputField } from "../types/product-review-form.types";

export const PRODUCT_REVIEW_FORM_BACK_LABEL = "До відгуків";
export const PRODUCT_REVIEW_FORM_BACK_ICON = "arrow_back";
export const PRODUCT_REVIEW_FORM_PRODUCT_PREFIX = "Ваш відгук про";

export const PRODUCT_REVIEW_FORM_NAME_FIELD: ProductReviewFormInputField = {
  name: "name",
  label: "Ваше ім’я *",
  placeholder: "Як підписати відгук",
  maxLength: PRODUCT_REVIEW_NAME_MAX_LENGTH,
  autoComplete: "given-name",
};

export const PRODUCT_REVIEW_FORM_DETAIL_FIELDS: ProductReviewFormInputField[] = [
  {
    name: "advantages",
    label: "Переваги",
    placeholder: "Що сподобалось",
    maxLength: PRODUCT_REVIEW_PROS_CONS_MAX_LENGTH,
  },
  {
    name: "drawbacks",
    label: "Недоліки",
    placeholder: "Що можна покращити",
    maxLength: PRODUCT_REVIEW_PROS_CONS_MAX_LENGTH,
  },
];

export const PRODUCT_REVIEW_FORM_COMMENT_NAME = "comment";
export const PRODUCT_REVIEW_FORM_COMMENT_LABEL = "Коментар *";
export const PRODUCT_REVIEW_FORM_COMMENT_PLACEHOLDER =
  "Розкажіть, що сподобалось і що варто знати іншим покупцям";
export const PRODUCT_REVIEW_FORM_COMMENT_HINT = `Мінімум ${PRODUCT_REVIEW_COMMENT_MIN_LENGTH} символів`;
export const PRODUCT_REVIEW_FORM_COMMENT_COUNTER = (length: number) =>
  `${length} / ${PRODUCT_REVIEW_COMMENT_MAX_LENGTH}`;

export const PRODUCT_REVIEW_FORM_NOTICE_ICON = "info";
export const PRODUCT_REVIEW_FORM_NOTICE =
  "Відгук з’явиться після перевірки модератором, зазвичай протягом доби.";

export const PRODUCT_REVIEW_FORM_SUBMIT_LABEL = "Надіслати відгук";
export const PRODUCT_REVIEW_FORM_SUBMIT_ICON = "send";
export const PRODUCT_REVIEW_FORM_CANCEL_LABEL = "Скасувати";
export const PRODUCT_REVIEW_FORM_ERROR_TOAST_TITLE = "Не вдалося надіслати відгук";

export const PRODUCT_REVIEW_FORM_THUMBNAIL_SIZES = "48px";
export const PRODUCT_REVIEW_FORM_THUMBNAIL_CLASS_NAME =
  "size-11 rounded-[9px] lg:size-12 lg:rounded-[10px]";

export const PRODUCT_REVIEW_FORM_TEXTAREA_CLASS_NAME = "min-h-[120px] resize-y lg:min-h-32";

export const PRODUCT_REVIEW_FORM_NOTICE_CLASS_NAME =
  "flex items-start gap-[9px] rounded-xl bg-accent-soft px-3.5 py-3 text-[13px] leading-normal text-accent-dark lg:gap-2.5 lg:px-4 lg:py-3.5 lg:text-[13.5px]";

export const PRODUCT_REVIEW_FORM_SUBMIT_CLASS_NAME =
  "h-[50px] rounded-xl text-[15px] lg:h-12 lg:flex-1 lg:text-[14.5px]";
export const PRODUCT_REVIEW_FORM_CANCEL_CLASS_NAME = "h-12 rounded-xl px-[22px] text-[14.5px]";
