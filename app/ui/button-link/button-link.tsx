import Link from "next/link";
import {
  BUTTON_BASE_CLASSNAME,
  BUTTON_DEFAULT_SIZE,
  BUTTON_DEFAULT_VARIANT,
  BUTTON_SIZE_CLASSNAMES,
  BUTTON_VARIANT_CLASSNAMES,
} from "@/app/ui/button/constants/button.constants";
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
    <Link
      {...props}
      className={`${BUTTON_BASE_CLASSNAME} ${BUTTON_VARIANT_CLASSNAMES[variant]} ${BUTTON_SIZE_CLASSNAMES[size]} ${className ?? ""}`}
    >
      {children}
      {trailingIcon && (
        <span aria-hidden className={BUTTON_LINK_TRAILING_ICON_CLASS_NAME}>
          {trailingIcon}
        </span>
      )}
    </Link>
  );
};
