"use client";

import { useState } from "react";
import Link from "next/link";
import {
  CATALOG_CATEGORY_DEFAULT_ICON,
  CATALOG_CATEGORY_ICONS,
} from "@/app/shared/catalog-categories/constants/catalog-categories.constants";
import { HEADER_CATALOG_LABEL } from "../../../header/constants/header.constants";
import type { MobileCatalogPanelProps } from "./types/mobile-catalog-panel.types";

export function MobileCatalogPanel({ categories, isOpen, onClose }: MobileCatalogPanelProps) {
  const [activeCategoryId, setActiveCategoryId] = useState(categories[0]?.id);

  const activeCategory =
    categories.find((category) => category.id === activeCategoryId) ?? categories[0];

  if (!activeCategory) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-hidden={!isOpen}
      className={`fixed inset-0 z-50 flex flex-col bg-surface-soft transition-transform duration-300 ease-out lg:hidden ${
        isOpen ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex items-center justify-between border-b border-border-soft bg-background px-4.5 py-5">
        <span className="font-heading text-[19px] font-semibold tracking-[-.02em] text-foreground">
          {HEADER_CATALOG_LABEL}
        </span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Закрити каталог"
          className="font-symbols text-2xl text-muted"
        >
          close
        </button>
      </div>

      <div className="grid min-h-0 flex-1 grid-cols-[150px_1fr] gap-3 p-3.5 pb-[100px]">
        <div className="flex flex-col gap-2 overflow-y-auto [scrollbar-width:none]">
          {categories.map((category) => {
            const isActive = category.id === activeCategoryId;
            const icon = CATALOG_CATEGORY_ICONS[category.slug] ?? CATALOG_CATEGORY_DEFAULT_ICON;

            return (
              <div
                key={category.id}
                onClick={() => setActiveCategoryId(category.id)}
                className={`flex cursor-pointer items-center gap-2.5 rounded-xl border px-2.5 py-3 ${
                  isActive
                    ? "border-accent-soft bg-accent-soft text-accent-dark"
                    : "border-transparent text-foreground"
                }`}
              >
                <span
                  className={`font-symbols text-[20px] ${isActive ? "text-accent" : "text-muted"}`}
                >
                  {icon}
                </span>
                <span
                  className={`flex-1 text-[13px] leading-[1.25] ${isActive ? "font-semibold" : "font-medium"}`}
                >
                  {category.name}
                </span>
                {category.subs.length > 0 && (
                  <span
                    className={`font-symbols text-[17px] ${isActive ? "text-accent" : "text-muted-light"}`}
                  >
                    chevron_right
                  </span>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex flex-col gap-0.5 overflow-y-auto rounded-[14px] bg-background p-4 [scrollbar-width:none]">
          <div className="pb-2.5 text-[14.5px] font-semibold text-foreground">
            {activeCategory.name}
          </div>
          {activeCategory.subs.map((sub) => (
            <Link
              key={sub.id}
              href={`/catalog/${sub.slug}`}
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
}
