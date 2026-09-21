import {
  INPUT_BASE_CLASSNAME,
  INPUT_DEFAULT_SIZE,
  INPUT_SIZE_CLASSNAMES,
} from "./constants/input.constants";
import type { InputProps } from "./types/input.types";

export function Input({ size = INPUT_DEFAULT_SIZE, className, ...props }: InputProps) {
  return (
    <input
      {...props}
      className={`${INPUT_BASE_CLASSNAME} ${INPUT_SIZE_CLASSNAMES[size]} ${className ?? ""}`}
    />
  );
}
