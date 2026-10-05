export const CHECKOUT_CONTENT_CLASS_NAME =
  "mx-auto flex w-full max-w-page flex-col gap-3.5 px-3.5 pb-14 pt-3 lg:gap-[22px] lg:px-10 lg:pt-[26px]";

/** Shared with the skeleton so the two occupy the same layout. */
export const CHECKOUT_GRID_CLASS_NAME =
  "grid items-start gap-3.5 lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-7";

/** Clears the sticky desktop header, which is about 120px tall, with some air to spare. */
export const CHECKOUT_SUMMARY_STICKY_CLASS_NAME = "lg:sticky lg:top-[140px]";

export const CHECKOUT_TITLE = "Оформлення замовлення";
export const CHECKOUT_BREADCRUMB_HOME_ITEM = { label: "Головна", href: "/" };
export const CHECKOUT_BREADCRUMB_CART_LABEL = "Кошик";
export const CHECKOUT_BREADCRUMB_CURRENT_ITEM = { label: "Оформлення" };

/** Orders and payments are not wired up yet, so a valid form ends here instead of faking an order. */
export const CHECKOUT_PLACE_TOAST_TITLE = "Скоро";
export const CHECKOUT_PLACE_TOAST_MESSAGE =
  "Оформлення та оплата замовлень стануть доступними найближчим часом.";
