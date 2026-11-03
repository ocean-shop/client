import {
  BUTTON_BASE_CLASSNAME,
  BUTTON_SIZE_CLASSNAMES,
  BUTTON_VARIANT_CLASSNAMES,
} from "../constants/button.constants";
import type { ButtonSize, ButtonVariant } from "../types/button.types";

/** Shared by `Button` and `ButtonLink`, so a link styled as a button matches it exactly. */
export const getButtonClassNameHelper = (
  variant: ButtonVariant,
  size: ButtonSize,
  className?: string
): string => {
  return `${BUTTON_BASE_CLASSNAME} ${BUTTON_VARIANT_CLASSNAMES[variant]} ${BUTTON_SIZE_CLASSNAMES[size]} ${className ?? ""}`;
};
