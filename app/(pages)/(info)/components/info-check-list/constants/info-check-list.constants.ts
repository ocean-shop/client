import type { InfoCheckListLayout, InfoCheckListVariant } from "../types/info-check-list.types";

export const INFO_CHECK_LIST_DEFAULT_VARIANT: InfoCheckListVariant = "check";
export const INFO_CHECK_LIST_DEFAULT_LAYOUT: InfoCheckListLayout = "stack";

export const INFO_CHECK_LIST_ICONS: Record<InfoCheckListVariant, string> = {
  check: "check",
  close: "close",
};

export const INFO_CHECK_LIST_ICON_CLASS_NAMES: Record<InfoCheckListVariant, string> = {
  check: "text-accent",
  close: "text-error-dark",
};

export const INFO_CHECK_LIST_LAYOUT_CLASS_NAMES: Record<InfoCheckListLayout, string> = {
  stack: "flex flex-col gap-2.5",
  grid: "grid gap-3 md:grid-cols-2 lg:gap-4",
};
