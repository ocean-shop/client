"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { INFO_MENU_GROUPS } from "../../constants/info.constants";
import {
  INFO_MOBILE_NAV_CHIP_ACTIVE_CLASS_NAME,
  INFO_MOBILE_NAV_CHIP_CLASS_NAME,
  INFO_MOBILE_NAV_CHIP_IDLE_CLASS_NAME,
} from "./constants/info-mobile-nav.constants";

const menuItems = INFO_MENU_GROUPS.flatMap((group) => group.items);

/** Mobile and tablet navigation between the info pages: a sticky row of chips. */
export const InfoMobileNav = () => {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);

  // The row is wider than a phone, so bring the current page's chip into view.
  useEffect(() => {
    const nav = navRef.current;
    const activeChip = nav?.querySelector<HTMLElement>('[aria-current="page"]');

    if (!nav || !activeChip) return;

    nav.scrollLeft = activeChip.offsetLeft - (nav.clientWidth - activeChip.offsetWidth) / 2;
  }, [pathname]);

  return (
    <nav
      ref={navRef}
      className="sticky top-[var(--mobile-header-height)] z-20 flex gap-1.5 overflow-x-auto border-y border-border-soft bg-background px-4 py-2.5 [scrollbar-width:none] lg:hidden"
    >
      {menuItems.map((item) => {
        const isActive = item.href === pathname;

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={`${INFO_MOBILE_NAV_CHIP_CLASS_NAME} ${
              isActive
                ? INFO_MOBILE_NAV_CHIP_ACTIVE_CLASS_NAME
                : INFO_MOBILE_NAV_CHIP_IDLE_CLASS_NAME
            }`}
          >
            {item.shortLabel}
          </Link>
        );
      })}
    </nav>
  );
};
