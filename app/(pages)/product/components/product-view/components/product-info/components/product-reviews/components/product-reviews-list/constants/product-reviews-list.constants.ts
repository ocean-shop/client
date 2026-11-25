import { API_DEFAULT_REVALIDATE_SECONDS } from "@/app/core/api/constants/api.constants";

export const PRODUCT_REVIEWS_QUERY_KEY = "product-reviews";

/** The pages behind the action are cached on the server for as long, so refetching sooner is moot. */
export const PRODUCT_REVIEWS_STALE_TIME_MS = API_DEFAULT_REVALIDATE_SECONDS * 1000;

export const PRODUCT_REVIEWS_LIST_LABEL = "Список відгуків";
export const PRODUCT_REVIEWS_EMPTY_TEXT =
  "Ще ніхто не залишив відгук про цей товар. Будьте першим!";
export const PRODUCT_REVIEWS_LOCALE = "uk-UA";

/** Ukrainian needs three forms: 1 відгук, 3 відгуки, 9 відгуків. */
export const PRODUCT_REVIEWS_WORD_FORMS: Partial<Record<Intl.LDMLPluralRule, string>> = {
  one: "відгук",
  few: "відгуки",
  many: "відгуків",
  other: "відгуку",
};

export const PRODUCT_REVIEWS_MORE_LABEL_PREFIX = "Показати ще";

/** On desktop the list scrolls inside the card, so a long thread does not stretch the column. */
export const PRODUCT_REVIEWS_LIST_SCROLL_CLASS_NAME =
  "lg:-mr-2.5 lg:max-h-[520px] lg:overflow-y-auto lg:overscroll-contain lg:border-b lg:border-surface lg:pr-2.5 lg:[scrollbar-color:var(--footer-border)_transparent] lg:[scrollbar-width:thin]";

export const PRODUCT_REVIEWS_MORE_BUTTON_CLASS_NAME = "h-[46px] w-full rounded-xl text-sm lg:h-11";
