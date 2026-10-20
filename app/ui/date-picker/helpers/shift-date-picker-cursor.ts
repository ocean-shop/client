import { DATE_PICKER_YEARS_PER_PAGE } from "../constants/date-picker.constants";
import type { DatePickerCursor, DatePickerView } from "../types/date-picker.types";

/** One page back (`-1`) or forward (`1`): a month, a year, or a page of years, depending on the view. */
export const shiftDatePickerCursorHelper = (
  view: DatePickerView,
  { year, month }: DatePickerCursor,
  direction: -1 | 1
): DatePickerCursor => {
  if (view === "days") {
    const index = year * 12 + month + direction;

    return { year: Math.floor(index / 12), month: ((index % 12) + 12) % 12 };
  }

  return { year: year + direction * (view === "years" ? DATE_PICKER_YEARS_PER_PAGE : 1), month };
};
