"use client";

import { usePathname } from "next/navigation";
import { useAuthUser } from "@/app/shared/auth/hooks/use-auth-user";
import { Button } from "@/app/ui/button/button";
import { MaterialIcon } from "@/app/ui/material-icon/material-icon";
import { SideNavLink } from "@/app/ui/side-nav-link/side-nav-link";
import { SurfaceCard } from "@/app/ui/surface-card/surface-card";
import {
  CABINET_LOGOUT_ICON,
  CABINET_LOGOUT_LABEL,
  CABINET_MENU_ITEMS,
} from "../../constants/cabinet.constants";
import { getCabinetUserDisplayHelper } from "../../helpers/get-cabinet-user-display";
import { isCabinetPathActiveHelper } from "../../helpers/is-cabinet-path-active";
import { useCabinetLogout } from "../../hooks/use-cabinet-logout";
import { CabinetAvatar } from "../cabinet-avatar/cabinet-avatar";
import { CabinetUserName } from "../cabinet-user-name/cabinet-user-name";

/** Desktop navigation of the cabinet: who is signed in, its sections and the way out. */
export const CabinetSidebar = () => {
  const pathname = usePathname();
  const user = getCabinetUserDisplayHelper(useAuthUser());
  const { logout, isPending } = useCabinetLogout();

  return (
    <aside className="hidden flex-col gap-3.5 lg:flex">
      <SurfaceCard padding="none" className="flex items-center gap-3 p-[18px]">
        <CabinetAvatar initial={user.initial} className="h-12 w-12 text-base" />
        <CabinetUserName title={user.title} subtitle={user.subtitle} className="gap-0.5" />
      </SurfaceCard>

      <SurfaceCard as="nav" padding="none" className="flex flex-col gap-0.5 p-2">
        {CABINET_MENU_ITEMS.map((item) => (
          <SideNavLink
            key={item.href}
            href={item.href}
            icon={item.icon}
            isActive={isCabinetPathActiveHelper(item.href, pathname)}
            className="h-[46px]"
          >
            {item.label}
          </SideNavLink>
        ))}

        <div className="mx-3 my-1.5 h-px bg-surface" />

        <Button
          variant="unstyled"
          size="auto"
          onClick={logout}
          disabled={isPending}
          className="h-[46px] !justify-start !gap-3 rounded-[10px] px-3 text-[14.5px] text-error-dark hover:bg-error/10"
        >
          <MaterialIcon name={CABINET_LOGOUT_ICON} className="text-[20px]" />
          {CABINET_LOGOUT_LABEL}
        </Button>
      </SurfaceCard>
    </aside>
  );
};
