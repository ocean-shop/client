"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { useOutsidePointerDown } from "@/app/core/hooks/use-outside-pointer-down";
import { buildCatalogCategoryHrefHelper } from "@/app/shared/catalog-categories/helpers/build-catalog-category-href";
import { useActiveCatalogCategory } from "@/app/shared/catalog-categories/hooks/use-active-catalog-category";
import { Button } from "@/app/ui/button/button";
import { CatalogCategoryItem } from "@/app/ui/catalog-category-item/catalog-category-item";
import { MaterialIcon } from "@/app/ui/material-icon/material-icon";
import { HEADER_CATALOG_LABEL } from "../../constants/header.constants";
import { CatalogPanelPromo } from "./components/catalog-panel-promo/catalog-panel-promo";
import type { CatalogPanelProps } from "./types/catalog-panel.types";

export const CatalogPanel = ({ categories }: CatalogPanelProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { activeCategory, setActiveCategoryId } = useActiveCatalogCategory(categories);
  const panelRef = useRef<HTMLDivElement>(null);

  const closePanel = () => setIsOpen(false);

  useOutsidePointerDown(panelRef, closePanel, isOpen);

  if (!activeCategory) return null;

  return (
    <div ref={panelRef} className="relative hidden lg:block">
      <Button
        variant="soft"
        size="auto"
        onClick={() => setIsOpen((open) => !open)}
        className="h-[42px] gap-2 rounded-[10px] px-5 text-[14.5px]"
      >
        <MaterialIcon name="apps" className="text-[20px]" />
        {HEADER_CATALOG_LABEL}
      </Button>

      {isOpen && (
        <div className="absolute left-0 top-[calc(100%+12px)] z-20 grid w-[1100px] grid-cols-[262px_1fr_268px] overflow-hidden rounded-[14px] border border-border-soft bg-background shadow-[0_30px_60px_-30px_rgba(17,28,45,0.45)]">
          <div className="flex flex-col gap-1.5 border-r border-border-soft bg-surface-soft p-3.5">
            {categories.map((category) => (
              <CatalogCategoryItem
                key={category.id}
                variant="desktop"
                category={category}
                isActive={category.id === activeCategory.id}
                onSelect={() => setActiveCategoryId(category.id)}
                onNavigate={closePanel}
              />
            ))}
          </div>

          <div className="flex flex-col gap-3.5 px-6.5 py-5.5">
            <div className="text-base font-semibold text-foreground">{activeCategory.name}</div>
            <div className="columns-2 gap-9">
              {activeCategory.subs.map((sub) => (
                <Link
                  key={sub.id}
                  href={buildCatalogCategoryHrefHelper(sub.slug)}
                  onClick={closePanel}
                  className="block break-inside-avoid py-[7px] text-sm text-muted hover:text-accent"
                >
                  {sub.name}
                </Link>
              ))}
            </div>
          </div>

          <CatalogPanelPromo />
        </div>
      )}
    </div>
  );
};
