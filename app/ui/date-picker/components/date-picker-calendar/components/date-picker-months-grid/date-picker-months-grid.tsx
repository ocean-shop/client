import { isDatePickerPageDisabledHelper } from "@/app/ui/date-picker/helpers/is-date-picker-page-disabled";
import { DATE_PICKER_CALENDAR_MONTHS } from "../../constants/date-picker-calendar.constants";
import { DatePickerCalendarCell } from "../date-picker-calendar-cell/date-picker-calendar-cell";
import { DATE_PICKER_MONTHS_GRID_SHORT_MONTHS } from "./constants/date-picker-months-grid.constants";
import type { DatePickerMonthsGridProps } from "./types/date-picker-months-grid.types";

export const DatePickerMonthsGrid = ({
  year,
  selected,
  current,
  min,
  max,
  onSelect,
}: DatePickerMonthsGridProps) => {
  return (
    <div className="grid grid-cols-3 gap-1">
      {DATE_PICKER_MONTHS_GRID_SHORT_MONTHS.map((label, month) => (
        <DatePickerCalendarCell
          key={label}
          isSelected={selected?.year === year && selected.month === month}
          isCurrent={current.year === year && current.month === month}
          aria-label={`${DATE_PICKER_CALENDAR_MONTHS[month]} ${year}`}
          disabled={isDatePickerPageDisabledHelper("days", { year, month }, min, max)}
          onClick={() => onSelect(month)}
          className="h-11"
        >
          {label}
        </DatePickerCalendarCell>
      ))}
    </div>
  );
};
