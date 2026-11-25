import { PRODUCT_REVIEW_RATING_MAX } from "@/app/(pages)/product/constants/product-review.constants";

export const PRODUCT_REVIEW_RATING_PICKER_LABEL = "Ваша оцінка *";
export const PRODUCT_REVIEW_RATING_PICKER_PLACEHOLDER = "Оберіть оцінку";
export const PRODUCT_REVIEW_RATING_PICKER_STAR_ICON = "star";
export const PRODUCT_REVIEW_RATING_PICKER_STAR_LABEL = (rating: number) =>
  `${rating} з ${PRODUCT_REVIEW_RATING_MAX}`;

export const PRODUCT_REVIEW_RATING_PICKER_STARS = Array.from(
  { length: PRODUCT_REVIEW_RATING_MAX },
  (_, index) => index + 1
);

/** What each number of stars means, shown next to the stars as they are hovered or picked. */
export const PRODUCT_REVIEW_RATING_PICKER_WORDS: Record<number, string> = {
  1: "Жахливо",
  2: "Погано",
  3: "Нормально",
  4: "Добре",
  5: "Відмінно",
};

export const PRODUCT_REVIEW_RATING_PICKER_STAR_BUTTON_CLASS_NAME =
  "flex size-12 items-center justify-center lg:size-11";
