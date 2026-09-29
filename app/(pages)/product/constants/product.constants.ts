import type { BreadcrumbItem } from "@/app/ui/breadcrumb/types/breadcrumb.types";

export const PRODUCT_HOME_BREADCRUMB_ITEM: BreadcrumbItem = {
  label: "Головна",
  href: "/",
};

/** Shared by the product page and its loading skeleton so the two occupy the same layout. */
export const PRODUCT_PAGE_CLASS_NAME = "flex-1 bg-surface-soft";
export const PRODUCT_CONTENT_CLASS_NAME =
  "mx-auto grid max-w-page items-start gap-8 px-4.5 pb-14 pt-4 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-12 lg:px-10 lg:pt-7";

/** Matches the gallery and info heights closely enough that the skeleton does not jump. */
export const PRODUCT_SKELETON_MAIN_CLASS_NAME =
  "h-[380px] rounded-[18px] bg-background lg:h-[560px]";
