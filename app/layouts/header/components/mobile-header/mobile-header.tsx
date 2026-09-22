"use client";

import { useState } from "react";
import { Button } from "@/app/ui/button/button";
import { HEADER_BRAND_NAME, HEADER_SEARCH_PLACEHOLDER } from "../../constants/header.constants";
import { NavDrawer } from "./components/nav-drawer/nav-drawer";
import type { MobileHeaderProps } from "./types/mobile-header.types";

export function MobileHeader({ categories }: MobileHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 h-[var(--mobile-header-height)] lg:hidden bg-background">
      <div className="flex items-center justify-between px-4.5 pb-2.5 pt-4">
        <Button
          variant="unstyled"
          size="auto"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Відкрити меню"
          className="font-symbols text-2xl text-muted"
        >
          menu
        </Button>
        <span className="font-heading text-lg font-semibold text-foreground">
          {HEADER_BRAND_NAME}
        </span>
      </div>

      <div className="px-4.5 pb-3">
        <div className="flex h-[42px] items-center gap-2.5 rounded-[10px] border border-border-soft bg-surface px-3.5 text-sm text-muted-light">
          <span className="font-symbols text-[19px]">search</span>
          {HEADER_SEARCH_PLACEHOLDER}
        </div>
      </div>

      <div className="flex gap-4.5 overflow-x-auto px-4.5 pb-3 text-[13.5px] text-foreground [scrollbar-width:none]">
        {categories.map((category) => (
          <span key={category.id} className="flex-none">
            {category.name}
          </span>
        ))}
      </div>

      <NavDrawer isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}
