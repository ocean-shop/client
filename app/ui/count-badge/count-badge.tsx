import {
  COUNT_BADGE_BASE_CLASS_NAME,
  COUNT_BADGE_SIZE_CLASS_NAMES,
} from "./constants/count-badge.constants";
import type { CountBadgeProps } from "./types/count-badge.types";

/** A round counter pill; a count of zero renders nothing. */
export const CountBadge = ({ count, size, className }: CountBadgeProps) => {
  if (count <= 0) return null;

  return (
    <span
      className={`${COUNT_BADGE_BASE_CLASS_NAME} ${COUNT_BADGE_SIZE_CLASS_NAMES[size]} ${className ?? ""}`}
    >
      {count}
    </span>
  );
};
