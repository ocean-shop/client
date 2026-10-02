import { CATALOG_PRODUCTS_LOCALE } from "@/app/shared/products/constants/products.constants";
import type { HeaderSearchVariant } from "../../../types/header-search.types";

export const HEADER_SEARCH_PANEL_PRODUCTS_LABEL = "Товари";

export const HEADER_SEARCH_PANEL_FOUND_LABEL = (count: number) =>
  `Знайдено ${count.toLocaleString(CATALOG_PRODUCTS_LOCALE)}`;

export const HEADER_SEARCH_PANEL_ALL_RESULTS_LABEL = (searchTerm: string) =>
  `Усі результати за запитом «${searchTerm}»`;

/** The mobile button spans a narrow row, so it drops the quoted term. */
export const HEADER_SEARCH_PANEL_ALL_RESULTS_SHORT_LABEL = "Усі результати";

export const HEADER_SEARCH_PANEL_NO_RESULTS_MESSAGE = (searchTerm: string) =>
  `Нічого не знайдено за запитом «${searchTerm}»`;

/** Rows to hold the panel's height steady while the first suggestions are on their way. */
export const HEADER_SEARCH_PANEL_SKELETON_COUNT = 5;

export const HEADER_SEARCH_PANEL_CLASS_NAMES: Record<HeaderSearchVariant, string> = {
  desktop:
    "absolute inset-x-0 top-[calc(100%+8px)] z-20 flex flex-col gap-3.5 rounded-2xl border border-border-soft bg-background p-4 shadow-[0_24px_60px_-24px_rgba(17,28,45,0.45)]",
  mobile:
    "fixed inset-x-0 bottom-0 top-[var(--mobile-header-height)] z-40 flex flex-col gap-3.5 overflow-y-auto border-t border-border-soft bg-background px-4.5 pb-6 pt-3.5 [scrollbar-width:none]",
};

export const HEADER_SEARCH_PANEL_HEADING_CLASS_NAMES: Record<HeaderSearchVariant, string> = {
  desktop: "flex items-center justify-between px-2 text-[12.5px]",
  mobile: "flex items-center justify-between text-xs",
};

/** Mobile rows bleed into the panel padding so their hover area reaches the edges. */
export const HEADER_SEARCH_PANEL_LIST_CLASS_NAMES: Record<HeaderSearchVariant, string> = {
  desktop: "flex flex-col gap-0.5",
  mobile: "-mx-2 flex flex-col gap-0.5",
};

export const HEADER_SEARCH_PANEL_IMAGE_CLASS_NAMES: Record<HeaderSearchVariant, string> = {
  desktop: "relative size-14 flex-none overflow-hidden rounded-[10px] bg-footer",
  mobile: "relative size-13 flex-none overflow-hidden rounded-[10px] bg-footer",
};

export const HEADER_SEARCH_PANEL_NAME_CLASS_NAMES: Record<HeaderSearchVariant, string> = {
  desktop: "text-sm font-medium leading-[1.35] text-foreground",
  mobile: "text-[13.5px] font-medium leading-[1.35] text-foreground",
};

export const HEADER_SEARCH_PANEL_PRICE_CLASS_NAMES: Record<HeaderSearchVariant, string> = {
  desktop: "font-heading text-[14.5px] font-semibold text-foreground",
  mobile: "font-heading text-sm font-semibold text-foreground",
};

export const HEADER_SEARCH_PANEL_ALL_RESULTS_CLASS_NAMES: Record<HeaderSearchVariant, string> = {
  desktop:
    "flex h-11 items-center justify-center rounded-[11px] bg-accent-soft text-sm font-semibold text-accent-dark hover:bg-surface-strong",
  /** `mt-auto` keeps the button at the bottom of the sheet when the results are few. */
  mobile:
    "mt-auto flex h-12 flex-none items-center justify-center rounded-xl bg-accent text-sm font-semibold text-white",
};
