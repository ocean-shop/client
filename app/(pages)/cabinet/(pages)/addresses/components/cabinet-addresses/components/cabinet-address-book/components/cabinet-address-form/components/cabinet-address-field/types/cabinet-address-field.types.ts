import type { InputProps } from "@/app/ui/input/types/input.types";

export type CabinetAddressFieldProps = Omit<InputProps, "size" | "variant" | "className"> & {
  label: string;
  error?: string | null;
  /** Classes for the wrapping label, e.g. to span the grid. */
  className?: string;
};
