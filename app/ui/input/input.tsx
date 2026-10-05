import {
  INPUT_BASE_CLASSNAME,
  INPUT_DEFAULT_SIZE,
  INPUT_DEFAULT_VARIANT,
  INPUT_SIZE_CLASSNAMES,
  INPUT_VARIANT_CLASSNAMES,
} from "./constants/input.constants";
import type { InputProps } from "./types/input.types";

export function Input({
  size = INPUT_DEFAULT_SIZE,
  variant = INPUT_DEFAULT_VARIANT,
  className,
  ...props
}: InputProps) {
  return (
    <input
      {...props}
      className={`${INPUT_BASE_CLASSNAME} ${INPUT_VARIANT_CLASSNAMES[variant]} ${INPUT_SIZE_CLASSNAMES[size]} ${className ?? ""}`}
    />
  );
}
