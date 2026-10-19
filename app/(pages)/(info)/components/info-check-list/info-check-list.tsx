import {
  INFO_CHECK_LIST_DEFAULT_LAYOUT,
  INFO_CHECK_LIST_DEFAULT_VARIANT,
  INFO_CHECK_LIST_ICON_CLASS_NAMES,
  INFO_CHECK_LIST_ICONS,
  INFO_CHECK_LIST_LAYOUT_CLASS_NAMES,
} from "./constants/info-check-list.constants";
import type { InfoCheckListProps } from "./types/info-check-list.types";

/** Bulleted list where each line is marked as allowed (check) or not (cross). */
export function InfoCheckList({
  items,
  variant = INFO_CHECK_LIST_DEFAULT_VARIANT,
  layout = INFO_CHECK_LIST_DEFAULT_LAYOUT,
}: InfoCheckListProps) {
  return (
    <ul className={INFO_CHECK_LIST_LAYOUT_CLASS_NAMES[layout]}>
      {items.map((item) => (
        <li key={item} className="flex gap-2.5 text-sm leading-[1.55] text-muted">
          <span
            aria-hidden
            className={`flex-none font-symbols text-lg leading-[inherit] ${INFO_CHECK_LIST_ICON_CLASS_NAMES[variant]}`}
          >
            {INFO_CHECK_LIST_ICONS[variant]}
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
