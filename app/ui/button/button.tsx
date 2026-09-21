import {
  BUTTON_BASE_CLASSNAME,
  BUTTON_DEFAULT_SIZE,
  BUTTON_DEFAULT_VARIANT,
  BUTTON_SIZE_CLASSNAMES,
  BUTTON_VARIANT_CLASSNAMES,
} from "./constants/button.constants";
import type { ButtonProps } from "./types/button.types";

export function Button({
  variant = BUTTON_DEFAULT_VARIANT,
  size = BUTTON_DEFAULT_SIZE,
  className,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      {...props}
      className={`${BUTTON_BASE_CLASSNAME} ${BUTTON_VARIANT_CLASSNAMES[variant]} ${BUTTON_SIZE_CLASSNAMES[size]} ${className ?? ""}`}
    />
  );
}
