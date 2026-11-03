import type { DatePickerCursor } from "@/app/ui/date-picker/types/date-picker.types";

export type DatePickerMonthsGridProps = {
  year: number;
  /** The picked date's month, or `null` while nothing is picked. */
  selected: DatePickerCursor | null;
  /** Today's month. */
  current: DatePickerCursor;
  min?: string;
  max?: string;
  onSelect: (month: number) => void;
};
