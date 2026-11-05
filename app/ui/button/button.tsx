import { BUTTON_DEFAULT_SIZE, BUTTON_DEFAULT_VARIANT } from "./constants/button.constants";
import { getButtonClassNameHelper } from "./helpers/get-button-class-name";
import type { ButtonProps } from "./types/button.types";

export const Button = ({
  variant = BUTTON_DEFAULT_VARIANT,
  size = BUTTON_DEFAULT_SIZE,
  className,
  type = "button",
  ...props
}: ButtonProps) => {
  return (
    <button type={type} {...props} className={getButtonClassNameHelper(variant, size, className)} />
  );
};
