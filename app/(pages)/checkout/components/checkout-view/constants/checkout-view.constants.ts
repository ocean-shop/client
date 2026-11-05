import { cartStore } from "@/app/shared/cart/cart-store";
import type { BreadcrumbItem } from "@/app/ui/breadcrumb/types/breadcrumb.types";

export const CHECKOUT_CONTENT_CLASS_NAME =
  "mx-auto flex w-full max-w-page flex-col gap-3.5 px-3.5 pb-14 pt-3 lg:gap-[22px] lg:px-10 lg:pt-[26px]";

/** Shared with the skeleton so the two occupy the same layout. */
export const CHECKOUT_GRID_CLASS_NAME =
  "grid items-start gap-3.5 lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-7";

/** Clears the sticky desktop header, which is about 120px tall, with some air to spare. */
export const CHECKOUT_SUMMARY_STICKY_CLASS_NAME = "lg:sticky lg:top-[140px]";

/** The heading of a form step and of the order summary beside them. */
export const CHECKOUT_SECTION_TITLE_CLASS_NAME =
  "font-heading text-base font-semibold tracking-[-.015em] text-foreground lg:text-[17px]";

export const CHECKOUT_TITLE = "Оформлення замовлення";

/** The cart has no page of its own, so its breadcrumb step opens the cart modal instead. */
export const CHECKOUT_BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  { label: "Головна", href: "/" },
  { label: "Кошик", onClick: cartStore.open },
  { label: "Оформлення" },
];

export const CHECKOUT_ORDER_ERROR_TOAST_TITLE = "Не вдалося оформити замовлення";
