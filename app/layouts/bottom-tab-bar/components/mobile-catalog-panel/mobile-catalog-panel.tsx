"use client";

import Link from "next/link";
import { HEADER_CATALOG_LABEL } from "@/app/layouts/header/constants/header.constants";
import { buildCatalogCategoryHrefHelper } from "@/app/shared/catalog-categories/helpers/build-catalog-category-href";
import { useActiveCatalogCategory } from "@/app/shared/catalog-categories/hooks/use-active-catalog-category";
import { Button } from "@/app/ui/button/button";
import { CatalogCategoryItem } from "@/app/ui/catalog-category-item/catalog-category-item";
import { MaterialIcon } from "@/app/ui/material-icon/material-icon";
import { MOBILE_CATALOG_PANEL_CLOSE_LABEL } from "./constants/mobile-catalog-panel.constants";
import type { MobileCatalogPanelProps } from "./types/mobile-catalog-panel.types";

export const MobileCatalogPanel = ({ categories, isOpen, onClose }: MobileCatalogPanelProps) => {
  const { activeCategory, setActiveCategoryId } = useActiveCatalogCategory(categories);

  if (!activeCategory) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-hidden={!isOpen}
      inert={!isOpen}
      className={`fixed inset-0 z-50 flex flex-col bg-surface-soft transition-transform duration-300 ease-out lg:hidden ${
        isOpen ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex items-center justify-between border-b border-border-soft bg-background px-4.5 py-5">
        <span className="font-heading text-[19px] font-semibold tracking-[-.02em] text-foreground">
          {HEADER_CATALOG_LABEL}
        </span>
        <Button
          variant="unstyled"
          size="auto"
          onClick={onClose}
          aria-label={MOBILE_CATALOG_PANEL_CLOSE_LABEL}
          className="text-muted"
        >
          <MaterialIcon name="close" className="text-2xl" />
        </Button>
      </div>

      <div className="grid min-h-0 flex-1 grid-cols-[150px_1fr] gap-3 p-3.5 pb-[100px]">
        <div className="flex flex-col gap-2 overflow-y-auto [scrollbar-width:none]">
          {categories.map((category) => (
            <CatalogCategoryItem
              key={category.id}
              variant="mobile"
              category={category}
              isActive={category.id === activeCategory.id}
              onSelect={() => setActiveCategoryId(category.id)}
              onNavigate={onClose}
            />
          ))}
        </div>

        <div className="flex flex-col gap-0.5 overflow-y-auto rounded-[14px] bg-background p-4 [scrollbar-width:none]">
          <div className="pb-2.5 text-[14.5px] font-semibold text-foreground">
            {activeCategory.name}
          </div>
          {activeCategory.subs.map((sub) => (
            <Link
              key={sub.id}
              href={buildCatalogCategoryHrefHelper(sub.slug)}
              onClick={onClose}
              className="block py-[9px] text-[13.5px] text-muted hover:text-accent"
            >
              {sub.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
