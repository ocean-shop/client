"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuthUser } from "@/app/shared/auth/hooks/use-auth-user";
import { Button } from "@/app/ui/button/button";
import {
  CABINET_LOGOUT_ICON,
  CABINET_LOGOUT_LABEL,
  CABINET_MENU_ITEMS,
} from "../../constants/cabinet.constants";
import { getCabinetUserDisplayHelper } from "../../helpers/get-cabinet-user-display";
import { isCabinetPathActiveHelper } from "../../helpers/is-cabinet-path-active";
import { useCabinetLogout } from "../../hooks/use-cabinet-logout";
import { CabinetAvatar } from "../cabinet-avatar/cabinet-avatar";
import {
  CABINET_MOBILE_NAV_SEGMENT_ACTIVE_CLASS_NAME,
  CABINET_MOBILE_NAV_SEGMENT_CLASS_NAME,
  CABINET_MOBILE_NAV_SEGMENT_IDLE_CLASS_NAME,
} from "./constants/cabinet-mobile-nav.constants";

/** Mobile and tablet navigation of the cabinet: the user, a logout button and section tabs. */
export const CabinetMobileNav = () => {
  const pathname = usePathname();
  const user = getCabinetUserDisplayHelper(useAuthUser());
  const { logout, isPending } = useCabinetLogout();

  return (
    <div className="flex flex-col gap-3 border-y border-border-soft bg-background px-4 pb-3 pt-4 lg:hidden">
      <div className="flex items-center gap-3">
        <CabinetAvatar initial={user.initial} className="h-[42px] w-[42px] text-sm" />
        <div className="flex min-w-0 flex-1 flex-col gap-px">
          <span className="truncate text-[15px] font-semibold text-foreground">{user.title}</span>
          {user.subtitle && (
            <span className="truncate text-[12.5px] text-muted-light">{user.subtitle}</span>
          )}
        </div>
        <Button
          variant="unstyled"
          size="auto"
          onClick={logout}
          disabled={isPending}
          aria-label={CABINET_LOGOUT_LABEL}
          className="h-10 w-10 flex-none rounded-[11px] border border-footer-border text-error-dark"
        >
          <span className="font-symbols text-[20px]">{CABINET_LOGOUT_ICON}</span>
        </Button>
      </div>

      <nav className="flex gap-1 overflow-x-auto rounded-xl bg-surface p-1 [scrollbar-width:none]">
        {CABINET_MENU_ITEMS.map((item) => {
          const isActive = isCabinetPathActiveHelper(item.href, pathname);

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={`${CABINET_MOBILE_NAV_SEGMENT_CLASS_NAME} ${
                isActive
                  ? CABINET_MOBILE_NAV_SEGMENT_ACTIVE_CLASS_NAME
                  : CABINET_MOBILE_NAV_SEGMENT_IDLE_CLASS_NAME
              }`}
            >
              {item.shortLabel}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};
