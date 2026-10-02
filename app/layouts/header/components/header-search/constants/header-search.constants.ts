import type { HeaderSearchVariant } from "../types/header-search.types";

export const HEADER_SEARCH_QUERY_KEY = "product-search";

/** Keeps typing from firing a suggestion request per keystroke. */
export const HEADER_SEARCH_DEBOUNCE_MS = 300;

/** The desktop field is one of several items in the header row; the mobile one owns its row. */
export const HEADER_SEARCH_FORM_CLASS_NAMES: Record<HeaderSearchVariant, string> = {
  desktop: "relative flex-1",
  mobile: "relative",
};

export const HEADER_SEARCH_FIELD_CLASS_NAMES: Record<HeaderSearchVariant, string> = {
  desktop:
    "flex h-[42px] items-center gap-2.5 rounded-[10px] border border-border-soft bg-surface px-4",
  mobile:
    "flex h-[42px] items-center gap-2.5 rounded-[10px] border border-border-soft bg-surface px-3.5",
};

export const HEADER_SEARCH_INPUT_CLASS_NAME =
  "min-w-0 flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-light";
