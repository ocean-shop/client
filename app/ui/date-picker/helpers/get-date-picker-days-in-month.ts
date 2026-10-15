/** Day zero of the next month is the last day of this one. */
export function getDatePickerDaysInMonthHelper(year: number, month: number): number {
  return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
}
