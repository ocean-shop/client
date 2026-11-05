import { Button } from "@/app/ui/button/button";
import { getDatePickerCalendarCellClassNameHelper } from "./helpers/get-date-picker-calendar-cell-class-name";
import type { DatePickerCalendarCellProps } from "./types/date-picker-calendar-cell.types";

/** One pickable day, month or year in the calendar grids. */
export const DatePickerCalendarCell = ({
  isSelected,
  isCurrent,
  className,
  ...props
}: DatePickerCalendarCellProps) => {
  return (
    <Button
      variant="unstyled"
      size="auto"
      aria-pressed={isSelected}
      {...props}
      className={`${className ?? ""} ${getDatePickerCalendarCellClassNameHelper(isSelected, isCurrent)}`}
    />
  );
};
