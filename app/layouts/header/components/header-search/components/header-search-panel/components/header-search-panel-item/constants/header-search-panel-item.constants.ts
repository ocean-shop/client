import type { HeaderSearchVariant } from "../../../../../types/header-search.types";

export const HEADER_SEARCH_PANEL_ITEM_NAME_CLASS_NAMES: Record<HeaderSearchVariant, string> = {
  desktop: "text-sm font-medium leading-[1.35] text-foreground",
  mobile: "text-[13.5px] font-medium leading-[1.35] text-foreground",
};

export const HEADER_SEARCH_PANEL_ITEM_PRICE_CLASS_NAMES: Record<HeaderSearchVariant, string> = {
  desktop: "font-heading text-[14.5px] font-semibold text-foreground",
  mobile: "font-heading text-sm font-semibold text-foreground",
};
