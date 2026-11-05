import type {
  DatePickerCursor,
  DatePickerView,
} from "@/app/ui/date-picker/types/date-picker.types";

export type DatePickerCalendarHeaderProps = {
  view: DatePickerView;
  cursor: DatePickerCursor;
  isPreviousDisabled: boolean;
  isNextDisabled: boolean;
  onPrevious: () => void;
  onNext: () => void;
  onChooseYear: () => void;
};
