import Link from "next/link";
import { MaterialIcon } from "../material-icon/material-icon";
import {
  SIDE_NAV_LINK_ACTIVE_CLASS_NAME,
  SIDE_NAV_LINK_BASE_CLASS_NAME,
  SIDE_NAV_LINK_ICON_ACTIVE_CLASS_NAME,
  SIDE_NAV_LINK_ICON_BASE_CLASS_NAME,
  SIDE_NAV_LINK_ICON_IDLE_CLASS_NAME,
  SIDE_NAV_LINK_IDLE_CLASS_NAME,
} from "./constants/side-nav-link.constants";
import type { SideNavLinkProps } from "./types/side-nav-link.types";

/** Row of a desktop side menu: an icon and a label, highlighted on the current page. */
export const SideNavLink = ({ href, icon, isActive, className, children }: SideNavLinkProps) => {
  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={`${SIDE_NAV_LINK_BASE_CLASS_NAME} ${
        isActive ? SIDE_NAV_LINK_ACTIVE_CLASS_NAME : SIDE_NAV_LINK_IDLE_CLASS_NAME
      } ${className ?? ""}`}
    >
      <MaterialIcon
        name={icon}
        className={`${SIDE_NAV_LINK_ICON_BASE_CLASS_NAME} ${
          isActive ? SIDE_NAV_LINK_ICON_ACTIVE_CLASS_NAME : SIDE_NAV_LINK_ICON_IDLE_CLASS_NAME
        }`}
      />
      {children}
    </Link>
  );
};
