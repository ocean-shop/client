import { Button } from "@/app/ui/button/button";
import { HEADER_BRAND_NAME, HEADER_CART_COUNT } from "../../../../constants/header.constants";
import {
  NAV_DRAWER_CART_LABEL,
  NAV_DRAWER_FAVORITES_LABEL,
  NAV_DRAWER_GROUPS,
  NAV_DRAWER_SUPPORT_EMAIL,
  NAV_DRAWER_SUPPORT_LABEL,
  NAV_DRAWER_SUPPORT_PHONE,
} from "./constants/nav-drawer.constants";
import type { NavDrawerProps } from "./types/nav-drawer.types";

export function NavDrawer({ isOpen, onClose }: NavDrawerProps) {
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
            aria-label="Закрити меню"
            className="font-symbols text-2xl"
          >
            close
          </Button>
        </div>

        <div className="flex flex-1 flex-col gap-3 overflow-y-auto px-3.5 py-3.5 [scrollbar-width:none]">
          <div className="flex flex-col overflow-hidden rounded-[14px] bg-background">
            <div className="flex cursor-pointer items-center gap-3 px-4 py-3.5 text-[14.5px] font-medium text-foreground hover:bg-surface">
              <span className="font-symbols text-[21px] text-accent">shopping_bag</span>
              {NAV_DRAWER_CART_LABEL}
              {HEADER_CART_COUNT > 0 && (
                <span className="ml-auto flex h-5 min-w-5 items-center justify-center rounded-full bg-accent px-1.5 text-[11px] font-bold text-white">
                  {HEADER_CART_COUNT}
                </span>
              )}
            </div>
            <div className="h-px bg-border-soft" />
            <div className="flex cursor-pointer items-center gap-3 px-4 py-3.5 text-[14.5px] font-medium text-foreground hover:bg-surface">
              <span className="font-symbols text-[21px] text-accent">favorite</span>
              {NAV_DRAWER_FAVORITES_LABEL}
            </div>
          </div>

          {NAV_DRAWER_GROUPS.map((group) => (
            <div
              key={group.title}
              className="flex flex-col gap-0.5 rounded-[14px] bg-background p-4"
            >
              <div className="pb-2 text-sm font-semibold text-foreground">{group.title}</div>
              {group.items.map((item) => (
                <div
                  key={item}
                  className="cursor-pointer py-[7px] text-sm text-muted hover:text-accent"
                >
                  {item}
                </div>
              ))}
            </div>
          ))}

          <div className="flex flex-col gap-1.5 rounded-[14px] bg-accent-soft p-4">
            <div className="text-xs font-semibold uppercase tracking-[.1em] text-accent">
              {NAV_DRAWER_SUPPORT_LABEL}
            </div>
            <div className="font-heading text-[17px] font-semibold text-foreground">
              {NAV_DRAWER_SUPPORT_PHONE}
            </div>
            <div className="text-sm text-muted">{NAV_DRAWER_SUPPORT_EMAIL}</div>
          </div>
        </div>
      </div>
    </>
  );
}
