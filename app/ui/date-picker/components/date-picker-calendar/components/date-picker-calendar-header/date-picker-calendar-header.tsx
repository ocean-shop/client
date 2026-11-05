import { Button } from "@/app/ui/button/button";
import { DATE_PICKER_YEARS_PER_PAGE } from "@/app/ui/date-picker/constants/date-picker.constants";
import { getDatePickerFirstYearHelper } from "@/app/ui/date-picker/helpers/get-date-picker-first-year";
import { MaterialIcon } from "@/app/ui/material-icon/material-icon";
import { DATE_PICKER_CALENDAR_MONTHS } from "../../constants/date-picker-calendar.constants";
import {
  DATE_PICKER_CALENDAR_CHOOSE_YEAR_LABEL,
  DATE_PICKER_CALENDAR_NAV_BUTTON_CLASS_NAME,
  DATE_PICKER_CALENDAR_NEXT_LABELS,
  DATE_PICKER_CALENDAR_PREVIOUS_LABELS,
  DATE_PICKER_CALENDAR_TITLE_BUTTON_CLASS_NAME,
} from "./constants/date-picker-calendar-header.constants";
import type { DatePickerCalendarHeaderProps } from "./types/date-picker-calendar-header.types";

/** Paging arrows around the title; the title opens the year grid, or shows the year range there. */
export const DatePickerCalendarHeader = ({
  view,
  cursor,
  isPreviousDisabled,
  isNextDisabled,
  onPrevious,
  onNext,
  onChooseYear,
}: DatePickerCalendarHeaderProps) => {
  const firstYear = getDatePickerFirstYearHelper(cursor.year);

  return (
    <div className="flex items-center justify-between gap-2">
      <Button
        variant="unstyled"
        size="auto"
        aria-label={DATE_PICKER_CALENDAR_PREVIOUS_LABELS[view]}
        disabled={isPreviousDisabled}
        onClick={onPrevious}
        className={DATE_PICKER_CALENDAR_NAV_BUTTON_CLASS_NAME}
      >
        <MaterialIcon name="chevron_left" className="text-xl" />
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
          onClick={onChooseYear}
          className={DATE_PICKER_CALENDAR_TITLE_BUTTON_CLASS_NAME}
        >
          <span aria-live="polite">
            {view === "days" && `${DATE_PICKER_CALENDAR_MONTHS[cursor.month]} `}
            {cursor.year}
          </span>
          <MaterialIcon name="expand_more" className="text-lg text-muted-light" />
        </Button>
      )}

      <Button
        variant="unstyled"
        size="auto"
        aria-label={DATE_PICKER_CALENDAR_NEXT_LABELS[view]}
        disabled={isNextDisabled}
        onClick={onNext}
        className={DATE_PICKER_CALENDAR_NAV_BUTTON_CLASS_NAME}
      >
        <MaterialIcon name="chevron_right" className="text-xl" />
      </Button>
    </div>
  );
};
