import { toDatePickerValueHelper } from "./to-date-picker-value";

/** Today in the user's own timezone, so a birthday picked late in the evening isn't a day off. */
export const getDatePickerTodayHelper = (): string => {
  const now = new Date();

  return toDatePickerValueHelper(now.getFullYear(), now.getMonth(), now.getDate());
};
