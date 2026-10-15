import { getDatePickerDaysInMonthHelper } from "./get-date-picker-days-in-month";

/** The month's day numbers, led by `null` cells so the 1st lands under its weekday (Monday first). */
export function buildDatePickerDaysHelper(year: number, month: number): (number | null)[] {
  const leadingCells = (new Date(Date.UTC(year, month, 1)).getUTCDay() + 6) % 7;
  const days = Array.from(
    { length: getDatePickerDaysInMonthHelper(year, month) },
    (_, index) => index + 1
  );

  return [...Array<null>(leadingCells).fill(null), ...days];
}
