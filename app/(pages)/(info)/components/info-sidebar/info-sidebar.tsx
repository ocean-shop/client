"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import { INFO_MENU_GROUPS } from "../../constants/info.constants";
import {
  INFO_SIDEBAR_GROUP_CLASS_NAME,
  INFO_SIDEBAR_GROUP_DIVIDED_CLASS_NAME,
  INFO_SIDEBAR_GROUP_FIRST_CLASS_NAME,
  INFO_SIDEBAR_ICON_ACTIVE_CLASS_NAME,
  INFO_SIDEBAR_ICON_IDLE_CLASS_NAME,
  INFO_SIDEBAR_ITEM_ACTIVE_CLASS_NAME,
  INFO_SIDEBAR_ITEM_CLASS_NAME,
  INFO_SIDEBAR_ITEM_IDLE_CLASS_NAME,
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

          {group.items.map((item) => {
            const isActive = item.href === pathname;

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`${INFO_SIDEBAR_ITEM_CLASS_NAME} ${
                  isActive ? INFO_SIDEBAR_ITEM_ACTIVE_CLASS_NAME : INFO_SIDEBAR_ITEM_IDLE_CLASS_NAME
                }`}
              >
                <span
                  aria-hidden
                  className={`font-symbols text-[20px] ${
                    isActive
                      ? INFO_SIDEBAR_ICON_ACTIVE_CLASS_NAME
                      : INFO_SIDEBAR_ICON_IDLE_CLASS_NAME
                  }`}
                >
                  {item.icon}
                </span>
                {item.label}
              </Link>
            );
          })}
        </Fragment>
      ))}
    </nav>
  );
};
