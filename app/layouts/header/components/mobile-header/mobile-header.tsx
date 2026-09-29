"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/app/ui/button/button";
import { HEADER_BRAND_NAME, HEADER_HOME_HREF } from "../../constants/header.constants";
import { HeaderSearch } from "../header-search/header-search";
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
        <Link
          href={HEADER_HOME_HREF}
          className="font-heading text-lg font-semibold text-foreground"
        >
          {HEADER_BRAND_NAME}
        </Link>
      </div>

      <div className="px-4.5 pb-3">
        <HeaderSearch variant="mobile" />
      </div>

      <div className="flex gap-4.5 overflow-x-auto px-4.5 pb-3 text-[13.5px] text-foreground [scrollbar-width:none]">
        {categories.map((category) => (
          <Link key={category.id} href={`/catalog/${category.slug}`} className="flex-none">
            {category.name}
          </Link>
        ))}
      </div>

      <NavDrawer isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}
