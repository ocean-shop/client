import { buildDatePickerDaysHelper } from "@/app/ui/date-picker/helpers/build-date-picker-days";
import { isDatePickerRangeDisabledHelper } from "@/app/ui/date-picker/helpers/is-date-picker-range-disabled";
import { toDatePickerValueHelper } from "@/app/ui/date-picker/helpers/to-date-picker-value";
import { DatePickerCalendarCell } from "../date-picker-calendar-cell/date-picker-calendar-cell";
import { DATE_PICKER_DAYS_GRID_WEEKDAYS } from "./constants/date-picker-days-grid.constants";
import type { DatePickerDaysGridProps } from "./types/date-picker-days-grid.types";

export const DatePickerDaysGrid = ({
  cursor,
  value,
  today,
  min,
  max,
  onSelect,
}: DatePickerDaysGridProps) => {
  return (
    <div className="grid grid-cols-7 gap-0.5">
      {DATE_PICKER_DAYS_GRID_WEEKDAYS.map((weekday) => (
        <span
          key={weekday}
          className="flex h-8 items-center justify-center text-xs font-medium text-muted-light"
        >
          {weekday}
        </span>
      ))}

      {buildDatePickerDaysHelper(cursor.year, cursor.month).map((day, index) => {
        if (!day) return <span key={`empty-${index}`} />;

        const dayValue = toDatePickerValueHelper(cursor.year, cursor.month, day);

        return (
          <DatePickerCalendarCell
            key={dayValue}
            isSelected={dayValue === value}
            isCurrent={dayValue === today}
            aria-current={dayValue === today ? "date" : undefined}
            disabled={isDatePickerRangeDisabledHelper(dayValue, dayValue, min, max)}
            onClick={() => onSelect(dayValue)}
            className="h-9"
          >
            {day}
          </DatePickerCalendarCell>
        );
      })}
    </div>
  );
};
