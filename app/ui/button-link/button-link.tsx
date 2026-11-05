import Link from "next/link";
import {
  BUTTON_DEFAULT_SIZE,
  BUTTON_DEFAULT_VARIANT,
} from "@/app/ui/button/constants/button.constants";
import { getButtonClassNameHelper } from "@/app/ui/button/helpers/get-button-class-name";
import { MaterialIcon } from "@/app/ui/material-icon/material-icon";
import { BUTTON_LINK_TRAILING_ICON_CLASS_NAME } from "./constants/button-link.constants";
import type { ButtonLinkProps } from "./types/button-link.types";

/** A `next/link` that looks like `Button`, sharing its variants and sizes. */
export const ButtonLink = ({
  variant = BUTTON_DEFAULT_VARIANT,
  size = BUTTON_DEFAULT_SIZE,
  trailingIcon,
  className,
  children,
  ...props
}: ButtonLinkProps) => {
  return (
    <Link {...props} className={getButtonClassNameHelper(variant, size, className)}>
      {children}
      {trailingIcon && (
        <MaterialIcon name={trailingIcon} className={BUTTON_LINK_TRAILING_ICON_CLASS_NAME} />
      )}
    </Link>
  );
};
