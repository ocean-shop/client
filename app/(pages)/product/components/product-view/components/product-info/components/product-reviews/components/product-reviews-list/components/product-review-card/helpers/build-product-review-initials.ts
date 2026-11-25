import {
  PRODUCT_REVIEW_CARD_INITIALS_COUNT,
  PRODUCT_REVIEW_CARD_WORD_SEPARATOR,
} from "../constants/product-review-card.constants";

/** The avatar letters of a review author; `Array.from` keeps a letter outside the BMP whole. */
export const buildProductReviewInitialsHelper = (name: string): string => {
  return name
    .trim()
    .split(PRODUCT_REVIEW_CARD_WORD_SEPARATOR)
    .slice(0, PRODUCT_REVIEW_CARD_INITIALS_COUNT)
    .map((word) => Array.from(word)[0] ?? "")
    .join("")
    .toLocaleUpperCase("uk-UA");
};
