"use client";

import { useState } from "react";
import { Button } from "@/app/ui/button/button";
import { BOTTOM_TAB_BAR_ITEMS } from "./constants/bottom-tab-bar.constants";
import { MobileCatalogPanel } from "./components/mobile-catalog-panel/mobile-catalog-panel";
import type { BottomTabBarProps } from "./types/bottom-tab-bar.types";

export function BottomTabBar({ categories }: BottomTabBarProps) {
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);

  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-30 flex border-t border-border-soft bg-background px-2 pb-[14px] pt-2 lg:hidden">
        {BOTTOM_TAB_BAR_ITEMS.map((item) => {
          const isCatalog = item.id === "catalog";

          return (
            <Button
              key={item.id}
              variant="unstyled"
              size="auto"
              onClick={isCatalog ? () => setIsCatalogOpen(true) : undefined}
              className={`flex-1 flex-col justify-start text-center text-[10.5px] !gap-0 ${
                item.active || (isCatalog && isCatalogOpen) ? "text-accent" : "text-muted-light"
              }`}
            >
              <span className="relative flex">
                <span className="font-symbols text-[20px]">{item.icon}</span>
                {!!item.badge && (
                  <span className="absolute -right-2.5 -top-1 flex h-[16px] min-w-[16px] items-center justify-center rounded-full bg-accent px-1 text-[10.5px] font-bold text-white">
                    {item.badge}
                  </span>
                )}
              </span>
              {item.label}
            </Button>
          );
        })}
      </div>

      <MobileCatalogPanel
        categories={categories}
        isOpen={isCatalogOpen}
        onClose={() => setIsCatalogOpen(false)}
      />
    </>
  );
}
