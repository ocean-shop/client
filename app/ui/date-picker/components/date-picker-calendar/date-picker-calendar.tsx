"use client";

import { useState } from "react";
import { getDatePickerFirstYearHelper } from "../../helpers/get-date-picker-first-year";
import { getDatePickerInitialCursorHelper } from "../../helpers/get-date-picker-initial-cursor";
import { getDatePickerTodayHelper } from "../../helpers/get-date-picker-today";
import { isDatePickerPageDisabledHelper } from "../../helpers/is-date-picker-page-disabled";
import { parseDatePickerCursorHelper } from "../../helpers/parse-date-picker-cursor";
import { shiftDatePickerCursorHelper } from "../../helpers/shift-date-picker-cursor";
import type { DatePickerCursor, DatePickerView } from "../../types/date-picker.types";
import { DatePickerCalendarHeader } from "./components/date-picker-calendar-header/date-picker-calendar-header";
import { DatePickerDaysGrid } from "./components/date-picker-days-grid/date-picker-days-grid";
import { DatePickerMonthsGrid } from "./components/date-picker-months-grid/date-picker-months-grid";
import { DatePickerYearsGrid } from "./components/date-picker-years-grid/date-picker-years-grid";
import type { DatePickerCalendarProps } from "./types/date-picker-calendar.types";

/**
 * Mounted only while the picker is open, so every opening starts from the picked date (or today,
 * kept within `min`/`max`). The title switches to the year grid, then a month grid, then the days.
 */
export const DatePickerCalendar = ({
  value,
  min,
  max,
  initialView,
  onSelect,
}: DatePickerCalendarProps) => {
  const [today] = useState(getDatePickerTodayHelper);
  const selected = value ? parseDatePickerCursorHelper(value) : null;
  const current = parseDatePickerCursorHelper(today)!;
  const [view, setView] = useState<DatePickerView>(selected ? "days" : initialView);
  const [cursor, setCursor] = useState<DatePickerCursor>(() =>
    getDatePickerInitialCursorHelper(selected, today, min, max)
  );

  const previousCursor = shiftDatePickerCursorHelper(view, cursor, -1);
  const nextCursor = shiftDatePickerCursorHelper(view, cursor, 1);

  const handleYearSelect = (year: number) => {
    setCursor({ year, month: cursor.month });
    setView("months");
  };

  const handleMonthSelect = (month: number) => {
    setCursor({ year: cursor.year, month });
    setView("days");
  };

  return (
    <div className="flex flex-col gap-2">
      <DatePickerCalendarHeader
        view={view}
        cursor={cursor}
        isPreviousDisabled={isDatePickerPageDisabledHelper(view, previousCursor, min, max)}
        isNextDisabled={isDatePickerPageDisabledHelper(view, nextCursor, min, max)}
        onPrevious={() => setCursor(previousCursor)}
        onNext={() => setCursor(nextCursor)}
        onChooseYear={() => setView("years")}
      />

      {view === "days" && (
        <DatePickerDaysGrid
          cursor={cursor}
          value={value}
          today={today}
          min={min}
          max={max}
          onSelect={onSelect}
        />
      )}

      {view === "months" && (
        <DatePickerMonthsGrid
          year={cursor.year}
          selected={selected}
          current={current}
          min={min}
          max={max}
          onSelect={handleMonthSelect}
        />
      )}

      {view === "years" && (
        <DatePickerYearsGrid
          firstYear={getDatePickerFirstYearHelper(cursor.year)}
          selectedYear={selected?.year}
          currentYear={current.year}
          min={min}
          max={max}
          onSelect={handleYearSelect}
        />
      )}
    </div>
  );
};
