import type { DatePickerCursor, DatePickerView } from "../types/date-picker.types";
import { getDatePickerPageRangeHelper } from "./get-date-picker-page-range";
import { isDatePickerRangeDisabledHelper } from "./is-date-picker-range-disabled";

/** Whether the whole page the view shows at `cursor` lies outside `min`/`max`. */
export const isDatePickerPageDisabledHelper = (
  view: DatePickerView,
  cursor: DatePickerCursor,
  min?: string,
  max?: string
): boolean => {
  return isDatePickerRangeDisabledHelper(...getDatePickerPageRangeHelper(view, cursor), min, max);
};
