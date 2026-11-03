import type { DatePickerView } from "@/app/ui/date-picker/types/date-picker.types";

export const DATE_PICKER_CALENDAR_PREVIOUS_LABELS: Record<DatePickerView, string> = {
  days: "Попередній місяць",
  months: "Попередній рік",
  years: "Попередні роки",
};

export const DATE_PICKER_CALENDAR_NEXT_LABELS: Record<DatePickerView, string> = {
  days: "Наступний місяць",
  months: "Наступний рік",
  years: "Наступні роки",
};

export const DATE_PICKER_CALENDAR_CHOOSE_YEAR_LABEL = "Обрати рік";

export const DATE_PICKER_CALENDAR_NAV_BUTTON_CLASS_NAME =
  "h-8 w-8 rounded-lg text-muted-light hover:bg-surface hover:text-foreground";

export const DATE_PICKER_CALENDAR_TITLE_BUTTON_CLASS_NAME =
  "h-8 rounded-lg px-2.5 text-sm font-semibold text-foreground hover:bg-surface";
