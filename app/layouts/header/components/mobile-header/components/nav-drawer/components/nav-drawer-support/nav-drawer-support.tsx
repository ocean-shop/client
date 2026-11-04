import { SUPPORT_EMAIL, SUPPORT_PHONE } from "@/app/shared/support/constants/support.constants";
import { NAV_DRAWER_SUPPORT_LABEL } from "./constants/nav-drawer-support.constants";

export const NavDrawerSupport = () => {
  return (
    <div className="flex shrink-0 flex-col gap-1.5 rounded-[14px] bg-accent-soft p-4">
      <div className="text-xs font-semibold uppercase tracking-[.1em] text-accent">
        {NAV_DRAWER_SUPPORT_LABEL}
      </div>
      <div className="font-heading text-[17px] font-semibold text-foreground">{SUPPORT_PHONE}</div>
      <div className="text-sm text-muted">{SUPPORT_EMAIL}</div>
    </div>
  );
};
