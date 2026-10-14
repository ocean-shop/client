import type { DatePickerView } from "../../../types/date-picker.types";

export const DATE_PICKER_CALENDAR_MONTHS = [
  "Січень",
  "Лютий",
  "Березень",
  "Квітень",
  "Травень",
  "Червень",
  "Липень",
  "Серпень",
  "Вересень",
  "Жовтень",
  "Листопад",
  "Грудень",
];

export const DATE_PICKER_CALENDAR_SHORT_MONTHS = [
  "Січ",
  "Лют",
  "Бер",
  "Кві",
  "Тра",
  "Чер",
  "Лип",
  "Сер",
  "Вер",
  "Жов",
  "Лис",
  "Гру",
];

export const DATE_PICKER_CALENDAR_WEEKDAYS = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"];

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

export const DATE_PICKER_CALENDAR_CELL_CLASS_NAMES = {
  base: "rounded-[9px] text-sm disabled:opacity-35",
  default: "text-foreground hover:bg-surface",
  current: "font-semibold text-accent hover:bg-surface",
  selected: "bg-accent font-semibold text-white hover:bg-accent-dark",
};
