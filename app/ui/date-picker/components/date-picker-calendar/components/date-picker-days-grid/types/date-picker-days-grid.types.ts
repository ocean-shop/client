import type { DatePickerCursor } from "@/app/ui/date-picker/types/date-picker.types";

export type DatePickerDaysGridProps = {
  cursor: DatePickerCursor;
  /** The picked date, `YYYY-MM-DD`. */
  value: string | null;
  /** Today, `YYYY-MM-DD`. */
  today: string;
  min?: string;
  max?: string;
  onSelect: (value: string) => void;
};
