/** `YYYY-MM-DD` strings sort like the dates they hold, so plain string comparison is enough. */
export const isDatePickerRangeDisabledHelper = (
  from: string,
  to: string,
  min?: string,
  max?: string
): boolean => {
  return Boolean((min && to < min) || (max && from > max));
};
