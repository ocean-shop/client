import type { CountBadgeSize } from "../types/count-badge.types";

export const COUNT_BADGE_BASE_CLASS_NAME =
  "flex items-center justify-center rounded-full bg-accent font-bold text-white";

export const COUNT_BADGE_SIZE_CLASS_NAMES: Record<CountBadgeSize, string> = {
  sm: "h-[16px] min-w-[16px] px-1 text-[10.5px]",
  md: "h-[19px] min-w-[19px] px-[5px] text-[11px]",
  lg: "h-5 min-w-5 px-1.5 text-[11px]",
};
