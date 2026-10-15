import type { DatePickerView } from "../types/date-picker.types";

export const DATE_PICKER_DEFAULT_PLACEHOLDER = "ДД.ММ.РРРР";
export const DATE_PICKER_DEFAULT_VIEW: DatePickerView = "days";
export const DATE_PICKER_CLOSE_KEY = "Escape";
export const DATE_PICKER_CLEAR_LABEL = "Очистити";

export const DATE_PICKER_VALUE_PATTERN = /^(\d{4})-(\d{2})-(\d{2})$/;
export const DATE_PICKER_YEARS_PER_PAGE = 12;

export const DATE_PICKER_TRIGGER_CLASS_NAME =
  "flex h-[46px] w-full min-w-0 items-center justify-between gap-2 rounded-[11px] border bg-background px-3.5 text-left text-[14.5px] outline-none transition-shadow focus-visible:ring-[3px] disabled:pointer-events-none disabled:bg-surface-soft disabled:text-muted-light";

export const DATE_PICKER_TRIGGER_STATE_CLASS_NAMES = {
  default: "border-footer-border focus-visible:border-accent focus-visible:ring-accent/12",
  open: "border-accent ring-[3px] ring-accent/12",
  invalid: "border-error-dark focus-visible:ring-error/12",
};

export const DATE_PICKER_POPOVER_CLASS_NAME =
  "absolute left-0 top-[calc(100%+6px)] z-20 w-[300px] max-w-[calc(100vw-32px)] rounded-xl border border-border-soft bg-background p-3 shadow-[0_18px_40px_-22px_rgba(17,28,45,.45)]";
