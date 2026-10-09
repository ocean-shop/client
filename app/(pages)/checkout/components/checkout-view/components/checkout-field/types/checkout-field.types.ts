import type { InputProps } from "@/app/ui/input/types/input.types";

export type CheckoutFieldProps = Omit<InputProps, "size" | "variant" | "className"> & {
  label: string;
  /** Classes for the wrapping label, e.g. to span the grid. */
  className?: string;
};
