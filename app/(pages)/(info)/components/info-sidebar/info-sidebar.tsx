"use client";

import { usePathname } from "next/navigation";
import { Fragment } from "react";
import { SideNavLink } from "@/app/ui/side-nav-link/side-nav-link";
import { INFO_MENU_GROUPS } from "../../constants/info.constants";
import {
  INFO_SIDEBAR_GROUP_CLASS_NAME,
  INFO_SIDEBAR_GROUP_DIVIDED_CLASS_NAME,
  INFO_SIDEBAR_GROUP_FIRST_CLASS_NAME,
  INFO_SIDEBAR_ITEM_CLASS_NAME,
} from "./constants/info-sidebar.constants";

/** Desktop navigation between the info pages, grouped into "for buyers" and "company". */
export const InfoSidebar = () => {
  const pathname = usePathname();

  return (
    <nav className="hidden flex-col gap-0.5 rounded-2xl bg-background p-2 lg:flex">
      {INFO_MENU_GROUPS.map((group, groupIndex) => (
        <Fragment key={group.title}>
          <span
            className={`${INFO_SIDEBAR_GROUP_CLASS_NAME} ${
              groupIndex === 0
                ? INFO_SIDEBAR_GROUP_FIRST_CLASS_NAME
                : INFO_SIDEBAR_GROUP_DIVIDED_CLASS_NAME
            }`}
          >
            {group.title}
          </span>

          {group.items.map((item) => (
            <SideNavLink
              key={item.href}
              href={item.href}
              icon={item.icon}
              isActive={item.href === pathname}
              className={INFO_SIDEBAR_ITEM_CLASS_NAME}
            >
              {item.label}
            </SideNavLink>
          ))}
        </Fragment>
      ))}
    </nav>
  );
};
