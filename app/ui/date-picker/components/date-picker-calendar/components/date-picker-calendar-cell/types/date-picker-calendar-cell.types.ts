import type { ButtonProps } from "@/app/ui/button/types/button.types";

export type DatePickerCalendarCellProps = Omit<ButtonProps, "variant" | "size"> & {
  isSelected: boolean;
  /** Today's day, month or year; outlined in accent unless it is also selected. */
  isCurrent: boolean;
};
