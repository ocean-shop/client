export type DatePickerYearsGridProps = {
  /** The first year on the page; the grid shows a full page from it. */
  firstYear: number;
  selectedYear?: number;
  currentYear: number;
  min?: string;
  max?: string;
  onSelect: (year: number) => void;
};
