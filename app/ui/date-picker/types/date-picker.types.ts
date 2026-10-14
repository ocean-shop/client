/** `days` is the month grid; `months` and `years` let the user jump far without paging month by month. */
export type DatePickerView = "days" | "months" | "years";

/** The month the calendar shows; `month` is zero-based, like `Date`. */
export type DatePickerCursor = {
  year: number;
  month: number;
};

export type DatePickerProps = {
  /** `YYYY-MM-DD`, or `null` while nothing is picked. */
  value: string | null;
  onChange: (value: string | null) => void;
  /** Earliest pickable date, `YYYY-MM-DD`. */
  min?: string;
  /** Latest pickable date, `YYYY-MM-DD`. */
  max?: string;
  /** The view the calendar opens on while nothing is picked; a picked date always opens its month. */
  initialView?: DatePickerView;
  placeholder?: string;
  id?: string;
  disabled?: boolean;
  invalid?: boolean;
  /** Shows a "clear" action that sets the value back to `null`. */
  clearable?: boolean;
  "aria-labelledby"?: string;
  "aria-label"?: string;
};
