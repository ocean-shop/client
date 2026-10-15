import type { InputProps } from "@/app/ui/input/types/input.types";

export type CabinetProfileFieldProps = Omit<InputProps, "size" | "variant" | "className"> & {
  label: string;
  error?: string | null;
};
