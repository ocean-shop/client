"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import { buildCatalogCategoryHrefHelper } from "@/app/shared/catalog-categories/helpers/build-catalog-category-href";
import { Button } from "@/app/ui/button/button";
import { MaterialIcon } from "@/app/ui/material-icon/material-icon";
import { HEADER_BRAND_NAME, HEADER_HOME_HREF } from "../../constants/header.constants";
import { HeaderSearch } from "../header-search/header-search";
import { MOBILE_HEADER_OPEN_MENU_LABEL } from "./constants/mobile-header.constants";
import type { MobileHeaderProps } from "./types/mobile-header.types";

// Starts closed, so it skips the server HTML and loads in its own chunk after hydration.
const NavDrawer = dynamic(
  () => import("./components/nav-drawer/nav-drawer").then((module) => module.NavDrawer),
  { ssr: false }
);

export const MobileHeader = ({ categories }: MobileHeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 h-[var(--mobile-header-height)] lg:hidden bg-background">
      <div className="flex items-center justify-between px-4.5 pb-2.5 pt-4">
        <Button
          variant="unstyled"
          size="auto"
          onClick={() => setIsMenuOpen(true)}
          aria-label={MOBILE_HEADER_OPEN_MENU_LABEL}
          className="text-muted"
        >
          <MaterialIcon name="menu" className="text-2xl" />
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
          <Link
            key={category.id}
            href={buildCatalogCategoryHrefHelper(category.slug)}
            className="flex-none"
          >
            {category.name}
          </Link>
        ))}
      </div>

      <NavDrawer isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
};
