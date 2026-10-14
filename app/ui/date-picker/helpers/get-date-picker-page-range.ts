import { DATE_PICKER_YEARS_PER_PAGE } from "../constants/date-picker.constants";
import type { DatePickerCursor, DatePickerView } from "../types/date-picker.types";
import { getDatePickerDaysInMonthHelper } from "./get-date-picker-days-in-month";
import { toDatePickerValueHelper } from "./to-date-picker-value";

/** The first and last date the given view shows: one month, one year, or a page of years. */
export function getDatePickerPageRangeHelper(
  view: DatePickerView,
  { year, month }: DatePickerCursor
): [string, string] {
  if (view === "days") {
    return [
      toDatePickerValueHelper(year, month, 1),
      toDatePickerValueHelper(year, month, getDatePickerDaysInMonthHelper(year, month)),
    ];
  }

  const firstYear =
    view === "years"
      ? Math.floor(year / DATE_PICKER_YEARS_PER_PAGE) * DATE_PICKER_YEARS_PER_PAGE
      : year;
  const lastYear = view === "years" ? firstYear + DATE_PICKER_YEARS_PER_PAGE - 1 : year;

  return [toDatePickerValueHelper(firstYear, 0, 1), toDatePickerValueHelper(lastYear, 11, 31)];
}
