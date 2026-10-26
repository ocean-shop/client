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
  CABINET_SIDEBAR_ICON_ACTIVE_CLASS_NAME,
  CABINET_SIDEBAR_ICON_IDLE_CLASS_NAME,
  CABINET_SIDEBAR_ITEM_ACTIVE_CLASS_NAME,
  CABINET_SIDEBAR_ITEM_CLASS_NAME,
  CABINET_SIDEBAR_ITEM_IDLE_CLASS_NAME,
} from "./constants/cabinet-sidebar.constants";

/** Desktop navigation of the cabinet: who is signed in, its sections and the way out. */
export const CabinetSidebar = () => {
  const pathname = usePathname();
  const user = getCabinetUserDisplayHelper(useAuthUser());
  const { logout, isPending } = useCabinetLogout();

  return (
    <aside className="hidden flex-col gap-3.5 lg:flex">
      <div className="flex items-center gap-3 rounded-2xl bg-background p-[18px]">
        <CabinetAvatar initial={user.initial} className="h-12 w-12 text-base" />
        <div className="flex min-w-0 flex-col gap-0.5">
          <span className="truncate text-[15px] font-semibold text-foreground">{user.title}</span>
          {user.subtitle && (
            <span className="truncate text-[12.5px] text-muted-light">{user.subtitle}</span>
          )}
        </div>
      </div>

      <nav className="flex flex-col gap-0.5 rounded-2xl bg-background p-2">
        {CABINET_MENU_ITEMS.map((item) => {
          const isActive = isCabinetPathActiveHelper(item.href, pathname);

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={`${CABINET_SIDEBAR_ITEM_CLASS_NAME} ${
                isActive
                  ? CABINET_SIDEBAR_ITEM_ACTIVE_CLASS_NAME
                  : CABINET_SIDEBAR_ITEM_IDLE_CLASS_NAME
              }`}
            >
              <span
                className={`font-symbols text-[20px] ${
                  isActive
                    ? CABINET_SIDEBAR_ICON_ACTIVE_CLASS_NAME
                    : CABINET_SIDEBAR_ICON_IDLE_CLASS_NAME
                }`}
              >
                {item.icon}
              </span>
              {item.label}
            </Link>
          );
        })}

        <div className="mx-3 my-1.5 h-px bg-surface" />

        <Button
          variant="unstyled"
          size="auto"
          onClick={logout}
          disabled={isPending}
          className="h-[46px] !justify-start !gap-3 rounded-[10px] px-3 text-[14.5px] text-error-dark hover:bg-error/10"
        >
          <span className="font-symbols text-[20px]">{CABINET_LOGOUT_ICON}</span>
          {CABINET_LOGOUT_LABEL}
        </Button>
      </nav>
    </aside>
  );
};
