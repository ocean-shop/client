import { DATE_PICKER_CALENDAR_CELL_CLASS_NAMES } from "../constants/date-picker-calendar.constants";

/** Selected wins over current, so the picked cell stays highlighted even when it's today. */
export const getDatePickerCalendarCellClassNameHelper = (
  isSelected: boolean,
  isCurrent: boolean
): string => {
  const state = isSelected
    ? DATE_PICKER_CALENDAR_CELL_CLASS_NAMES.selected
    : isCurrent
      ? DATE_PICKER_CALENDAR_CELL_CLASS_NAMES.current
      : DATE_PICKER_CALENDAR_CELL_CLASS_NAMES.default;

  return `${DATE_PICKER_CALENDAR_CELL_CLASS_NAMES.base} ${state}`;
};
