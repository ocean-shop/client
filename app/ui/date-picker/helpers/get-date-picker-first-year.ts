import { DATE_PICKER_YEARS_PER_PAGE } from "../constants/date-picker.constants";

/** The first year on the year-grid page that holds `year`. */
export const getDatePickerFirstYearHelper = (year: number): number => {
  return Math.floor(year / DATE_PICKER_YEARS_PER_PAGE) * DATE_PICKER_YEARS_PER_PAGE;
};
