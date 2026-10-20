/** `(1990, 4, 21)` → `1990-05-21`; `month` is zero-based. */
export const toDatePickerValueHelper = (year: number, month: number, day: number): string => {
  return `${String(year).padStart(4, "0")}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
};
