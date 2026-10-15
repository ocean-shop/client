import { DATE_PICKER_VALUE_PATTERN } from "../constants/date-picker.constants";
import type { DatePickerCursor } from "../types/date-picker.types";

/** `1990-05-21` → the month it falls in, or `null` for anything that isn't `YYYY-MM-DD`. */
export function parseDatePickerCursorHelper(value: string): DatePickerCursor | null {
  const match = value.match(DATE_PICKER_VALUE_PATTERN);

  return match ? { year: Number(match[1]), month: Number(match[2]) - 1 } : null;
}
