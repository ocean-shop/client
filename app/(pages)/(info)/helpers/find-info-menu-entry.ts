import { INFO_MENU_GROUPS } from "../constants/info.constants";
import type { InfoMenuEntry } from "../types/info.types";

export const findInfoMenuEntryHelper = (pathname: string): InfoMenuEntry | null => {
  for (const group of INFO_MENU_GROUPS) {
    const item = group.items.find((menuItem) => menuItem.href === pathname);

    if (item) return { group, item };
  }

  return null;
};
