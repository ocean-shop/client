import { PRODUCT_REVIEW_RATING_MAX } from "@/app/(pages)/product/constants/product-review.constants";

export const PRODUCT_REVIEW_CARD_DATE_FORMATTER = new Intl.DateTimeFormat("uk-UA", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "Europe/Kyiv",
});

export const PRODUCT_REVIEW_CARD_STARS = Array.from(
  { length: PRODUCT_REVIEW_RATING_MAX },
  (_, index) => index + 1
);
export const PRODUCT_REVIEW_CARD_STAR_ICON = "star";
export const PRODUCT_REVIEW_CARD_RATING_LABEL = (rating: number) =>
  `Оцінка ${rating} з ${PRODUCT_REVIEW_RATING_MAX}`;

export const PRODUCT_REVIEW_CARD_VERIFIED_ICON = "verified";
export const PRODUCT_REVIEW_CARD_VERIFIED_LABEL = "Підтверджена покупка";
export const PRODUCT_REVIEW_CARD_ADVANTAGES_LABEL = "Переваги:";
export const PRODUCT_REVIEW_CARD_DRAWBACKS_LABEL = "Недоліки:";

/** Letters of the author's first two words make the avatar, e.g. "Олена К." → "ОК". */
export const PRODUCT_REVIEW_CARD_INITIALS_COUNT = 2;
export const PRODUCT_REVIEW_CARD_WORD_SEPARATOR = /\s+/;

export const PRODUCT_REVIEW_CARD_CLASS_NAME =
  "flex flex-col gap-[9px] border-t border-surface py-3.5 lg:gap-2.5 lg:py-4";

/** On phones the "verified purchase" badge drops under the author; on desktop it sits on the right. */
export const PRODUCT_REVIEW_CARD_HEADER_CLASS_NAME =
  "grid grid-cols-[auto_minmax(0,1fr)] items-center gap-x-2.5 gap-y-[9px] lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:gap-x-3";

export const PRODUCT_REVIEW_CARD_AVATAR_CLASS_NAME =
  "flex size-[34px] items-center justify-center rounded-full bg-accent-soft text-[12.5px] font-semibold text-accent-dark lg:size-9 lg:text-[13px]";

export const PRODUCT_REVIEW_CARD_VERIFIED_CLASS_NAME =
  "col-span-2 flex items-center gap-[3px] whitespace-nowrap text-xs font-medium text-accent lg:col-span-1 lg:gap-1 lg:text-[12.5px]";

export const PRODUCT_REVIEW_CARD_DETAIL_CLASS_NAME =
  "whitespace-pre-line break-words text-[13px] leading-normal text-muted lg:text-[13.5px]";
