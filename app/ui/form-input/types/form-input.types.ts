import type { InputProps } from "../../input/types/input.types";

export type FormInputProps = Omit<InputProps, "size" | "variant" | "className"> & {
  label: string;
  error?: string | null;
  /** Classes for the wrapping label, e.g. to span the grid. */
  className?: string;
};
