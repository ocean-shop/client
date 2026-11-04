import Link from "next/link";
import { Button } from "@/app/ui/button/button";
import { MaterialIcon } from "@/app/ui/material-icon/material-icon";
import { HEADER_BRAND_NAME } from "../../../../constants/header.constants";
import { NavDrawerShortcuts } from "./components/nav-drawer-shortcuts/nav-drawer-shortcuts";
import { NavDrawerSupport } from "./components/nav-drawer-support/nav-drawer-support";
import { NAV_DRAWER_CLOSE_LABEL, NAV_DRAWER_GROUPS } from "./constants/nav-drawer.constants";
import type { NavDrawerProps } from "./types/nav-drawer.types";

export const NavDrawer = ({ isOpen, onClose }: NavDrawerProps) => {
  return (
    <>
      <div
        onClick={onClose}
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-foreground/45 transition-opacity ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-hidden={!isOpen}
        inert={!isOpen}
        className={`fixed inset-y-0 left-0 z-50 flex w-[306px] max-w-[85vw] flex-col bg-surface-soft transition-transform duration-300 ease-out ${
          isOpen
            ? "translate-x-0 shadow-[14px_0_40px_-20px_rgba(17,28,45,0.5)]"
            : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between bg-accent px-4.5 py-5 text-white">
          <span className="font-heading text-lg font-semibold">{HEADER_BRAND_NAME}</span>
          <Button
            variant="unstyled"
            size="auto"
            onClick={onClose}
            aria-label={NAV_DRAWER_CLOSE_LABEL}
          >
            <MaterialIcon name="close" className="text-2xl" />
          </Button>
        </div>

        <div className="flex flex-1 flex-col gap-3 overflow-y-auto px-3.5 py-3.5 [scrollbar-width:none]">
          <NavDrawerShortcuts onClose={onClose} />

          {NAV_DRAWER_GROUPS.map((group) => (
            <div
              key={group.title}
              className="flex shrink-0 flex-col gap-0.5 rounded-[14px] bg-background p-4"
            >
              <div className="pb-2 text-sm font-semibold text-foreground">{group.title}</div>
              {group.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="py-[7px] text-sm text-muted hover:text-accent"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          ))}

          <NavDrawerSupport />
        </div>
      </div>
    </>
  );
};
