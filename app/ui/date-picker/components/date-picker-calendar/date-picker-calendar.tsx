"use client";

import { useState } from "react";
import { Button } from "@/app/ui/button/button";
import { DATE_PICKER_YEARS_PER_PAGE } from "../../constants/date-picker.constants";
import { buildDatePickerDaysHelper } from "../../helpers/build-date-picker-days";
import { getDatePickerPageRangeHelper } from "../../helpers/get-date-picker-page-range";
import { getDatePickerTodayHelper } from "../../helpers/get-date-picker-today";
import { isDatePickerRangeDisabledHelper } from "../../helpers/is-date-picker-range-disabled";
import { parseDatePickerCursorHelper } from "../../helpers/parse-date-picker-cursor";
import { shiftDatePickerCursorHelper } from "../../helpers/shift-date-picker-cursor";
import { toDatePickerValueHelper } from "../../helpers/to-date-picker-value";
import type { DatePickerCursor, DatePickerView } from "../../types/date-picker.types";
import {
  DATE_PICKER_CALENDAR_CHOOSE_YEAR_LABEL,
  DATE_PICKER_CALENDAR_MONTHS,
  DATE_PICKER_CALENDAR_NAV_BUTTON_CLASS_NAME,
  DATE_PICKER_CALENDAR_NEXT_LABELS,
  DATE_PICKER_CALENDAR_PREVIOUS_LABELS,
  DATE_PICKER_CALENDAR_SHORT_MONTHS,
  DATE_PICKER_CALENDAR_WEEKDAYS,
} from "./constants/date-picker-calendar.constants";
import { getDatePickerCalendarCellClassNameHelper } from "./helpers/get-date-picker-calendar-cell-class-name";
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
  const [cursor, setCursor] = useState<DatePickerCursor>(() => {
    if (selected) return selected;
    if (min && today < min) return parseDatePickerCursorHelper(min) ?? current;
    if (max && today > max) return parseDatePickerCursorHelper(max) ?? current;
    return current;
  });

  const previousCursor = shiftDatePickerCursorHelper(view, cursor, -1);
  const nextCursor = shiftDatePickerCursorHelper(view, cursor, 1);
  const isPreviousDisabled = isDatePickerRangeDisabledHelper(
    ...getDatePickerPageRangeHelper(view, previousCursor),
    min,
    max
  );
  const isNextDisabled = isDatePickerRangeDisabledHelper(
    ...getDatePickerPageRangeHelper(view, nextCursor),
    min,
    max
  );
  const firstYear =
    Math.floor(cursor.year / DATE_PICKER_YEARS_PER_PAGE) * DATE_PICKER_YEARS_PER_PAGE;

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
      <div className="flex items-center justify-between gap-2">
        <Button
          variant="unstyled"
          size="auto"
          aria-label={DATE_PICKER_CALENDAR_PREVIOUS_LABELS[view]}
          disabled={isPreviousDisabled}
          onClick={() => setCursor(previousCursor)}
          className={DATE_PICKER_CALENDAR_NAV_BUTTON_CLASS_NAME}
        >
          <span className="font-symbols text-xl">chevron_left</span>
        </Button>

        {view === "years" ? (
          <span className="text-sm font-semibold text-foreground" aria-live="polite">
            {firstYear} – {firstYear + DATE_PICKER_YEARS_PER_PAGE - 1}
          </span>
        ) : (
          <Button
            variant="unstyled"
            size="auto"
            aria-label={DATE_PICKER_CALENDAR_CHOOSE_YEAR_LABEL}
            onClick={() => setView("years")}
            className="h-8 rounded-lg px-2.5 text-sm font-semibold text-foreground hover:bg-surface"
          >
            <span aria-live="polite">
              {view === "days" && `${DATE_PICKER_CALENDAR_MONTHS[cursor.month]} `}
              {cursor.year}
            </span>
            <span className="font-symbols text-lg text-muted-light">expand_more</span>
          </Button>
        )}

        <Button
          variant="unstyled"
          size="auto"
          aria-label={DATE_PICKER_CALENDAR_NEXT_LABELS[view]}
          disabled={isNextDisabled}
          onClick={() => setCursor(nextCursor)}
          className={DATE_PICKER_CALENDAR_NAV_BUTTON_CLASS_NAME}
        >
          <span className="font-symbols text-xl">chevron_right</span>
        </Button>
      </div>

      {view === "days" && (
        <div className="grid grid-cols-7 gap-0.5">
          {DATE_PICKER_CALENDAR_WEEKDAYS.map((weekday) => (
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
              <Button
                key={dayValue}
                variant="unstyled"
                size="auto"
                aria-pressed={dayValue === value}
                aria-current={dayValue === today ? "date" : undefined}
                disabled={isDatePickerRangeDisabledHelper(dayValue, dayValue, min, max)}
                onClick={() => onSelect(dayValue)}
                className={`h-9 ${getDatePickerCalendarCellClassNameHelper(dayValue === value, dayValue === today)}`}
              >
                {day}
              </Button>
            );
          })}
        </div>
      )}

      {view === "months" && (
        <div className="grid grid-cols-3 gap-1">
          {DATE_PICKER_CALENDAR_SHORT_MONTHS.map((label, month) => (
            <Button
              key={label}
              variant="unstyled"
              size="auto"
              aria-label={`${DATE_PICKER_CALENDAR_MONTHS[month]} ${cursor.year}`}
              aria-pressed={selected?.year === cursor.year && selected.month === month}
              disabled={isDatePickerRangeDisabledHelper(
                ...getDatePickerPageRangeHelper("days", { year: cursor.year, month }),
                min,
                max
              )}
              onClick={() => handleMonthSelect(month)}
              className={`h-11 ${getDatePickerCalendarCellClassNameHelper(
                selected?.year === cursor.year && selected.month === month,
                current.year === cursor.year && current.month === month
              )}`}
            >
              {label}
            </Button>
          ))}
        </div>
      )}

      {view === "years" && (
        <div className="grid grid-cols-3 gap-1">
          {Array.from({ length: DATE_PICKER_YEARS_PER_PAGE }, (_, index) => firstYear + index).map(
            (year) => (
              <Button
                key={year}
                variant="unstyled"
                size="auto"
                aria-pressed={selected?.year === year}
                disabled={isDatePickerRangeDisabledHelper(
                  ...getDatePickerPageRangeHelper("months", { year, month: 0 }),
                  min,
                  max
                )}
                onClick={() => handleYearSelect(year)}
                className={`h-11 ${getDatePickerCalendarCellClassNameHelper(
                  selected?.year === year,
                  current.year === year
                )}`}
              >
                {year}
              </Button>
            )
          )}
        </div>
      )}
    </div>
  );
};
