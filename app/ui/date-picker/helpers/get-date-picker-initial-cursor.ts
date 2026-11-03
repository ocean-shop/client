import type { DatePickerCursor } from "../types/date-picker.types";
import { parseDatePickerCursorHelper } from "./parse-date-picker-cursor";

/** The picked month, or today's month kept within `min`/`max`. */
export const getDatePickerInitialCursorHelper = (
  selected: DatePickerCursor | null,
  today: string,
  min?: string,
  max?: string
): DatePickerCursor => {
  const current = parseDatePickerCursorHelper(today)!;

  if (selected) return selected;
  if (min && today < min) return parseDatePickerCursorHelper(min) ?? current;
  if (max && today > max) return parseDatePickerCursorHelper(max) ?? current;

  return current;
};
