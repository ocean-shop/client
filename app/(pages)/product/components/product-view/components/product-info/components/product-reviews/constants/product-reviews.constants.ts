import type { ProductReviewsView } from "../types/product-reviews.types";

export const PRODUCT_REVIEWS_TITLE = "Відгуки";
export const PRODUCT_REVIEWS_INITIAL_VIEW: ProductReviewsView = "list";
export const PRODUCT_REVIEWS_SESSION_ERROR_TOAST_TITLE = "Не вдалося відкрити форму відгуку";

export const PRODUCT_REVIEWS_CARD_CLASS_NAME = "flex flex-col gap-3 p-4 lg:gap-3.5 lg:p-5";

/** Clears the sticky header when switching views scrolls the card back to its title. */
export const PRODUCT_REVIEWS_TITLE_CLASS_NAME =
  "scroll-mt-[calc(var(--mobile-header-height)+16px)] text-base font-semibold text-foreground lg:scroll-mt-[140px] lg:text-[17px]";
