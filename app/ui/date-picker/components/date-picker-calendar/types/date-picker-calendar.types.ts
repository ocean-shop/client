import type { DatePickerView } from "../../../types/date-picker.types";

export type DatePickerCalendarProps = {
  value: string | null;
  min?: string;
  max?: string;
  initialView: DatePickerView;
  onSelect: (value: string) => void;
};
