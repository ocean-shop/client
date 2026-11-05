import { DATE_PICKER_YEARS_PER_PAGE } from "@/app/ui/date-picker/constants/date-picker.constants";
import { isDatePickerPageDisabledHelper } from "@/app/ui/date-picker/helpers/is-date-picker-page-disabled";
import { DatePickerCalendarCell } from "../date-picker-calendar-cell/date-picker-calendar-cell";
import type { DatePickerYearsGridProps } from "./types/date-picker-years-grid.types";

export const DatePickerYearsGrid = ({
  firstYear,
  selectedYear,
  currentYear,
  min,
  max,
  onSelect,
}: DatePickerYearsGridProps) => {
  const years = Array.from({ length: DATE_PICKER_YEARS_PER_PAGE }, (_, index) => firstYear + index);

  return (
    <div className="grid grid-cols-3 gap-1">
      {years.map((year) => (
        <DatePickerCalendarCell
          key={year}
          isSelected={selectedYear === year}
          isCurrent={currentYear === year}
          disabled={isDatePickerPageDisabledHelper("months", { year, month: 0 }, min, max)}
          onClick={() => onSelect(year)}
          className="h-11"
        >
          {year}
        </DatePickerCalendarCell>
      ))}
    </div>
  );
};
