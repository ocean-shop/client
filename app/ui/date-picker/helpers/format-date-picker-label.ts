import { DATE_PICKER_VALUE_PATTERN } from "../constants/date-picker.constants";

/** `1990-05-21` → `21.05.1990`; anything that isn't `YYYY-MM-DD` gives `null`. */
export function formatDatePickerLabelHelper(value: string | null): string | null {
  const match = value?.match(DATE_PICKER_VALUE_PATTERN);

  return match ? `${match[3]}.${match[2]}.${match[1]}` : null;
}
