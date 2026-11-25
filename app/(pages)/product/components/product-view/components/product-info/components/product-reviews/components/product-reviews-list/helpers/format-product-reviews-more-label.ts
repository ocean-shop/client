import {
  PRODUCT_REVIEWS_LOCALE,
  PRODUCT_REVIEWS_MORE_LABEL_PREFIX,
  PRODUCT_REVIEWS_WORD_FORMS,
} from "../constants/product-reviews-list.constants";

const pluralRules = new Intl.PluralRules(PRODUCT_REVIEWS_LOCALE);

/** "Show more" with the matching Ukrainian plural form, e.g. "Показати ще 12 відгуків". */
export const formatProductReviewsMoreLabelHelper = (remainingCount: number): string => {
  const word = PRODUCT_REVIEWS_WORD_FORMS[pluralRules.select(remainingCount)];

  return `${PRODUCT_REVIEWS_MORE_LABEL_PREFIX} ${remainingCount.toLocaleString(PRODUCT_REVIEWS_LOCALE)} ${word ?? PRODUCT_REVIEWS_WORD_FORMS.other}`;
};
