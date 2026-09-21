"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  CATALOG_CATEGORY_DEFAULT_ICON,
  CATALOG_CATEGORY_ICONS,
} from "@/app/shared/catalog-categories/constants/catalog-categories.constants";
import { HEADER_CATALOG_LABEL } from "../../constants/header.constants";
import { CATALOG_PANEL_PROMO } from "./constants/catalog-panel.constants";
import type { CatalogPanelProps } from "./types/catalog-panel.types";

export function CatalogPanel({ categories }: CatalogPanelProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategoryId, setActiveCategoryId] = useState(categories[0]?.id);
  const panelRef = useRef<HTMLDivElement>(null);

  const activeCategory =
    categories.find((category) => category.id === activeCategoryId) ?? categories[0];

  useEffect(() => {
    if (!isOpen) return;

    function handlePointerDown(event: PointerEvent) {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [isOpen]);

  if (!activeCategory) return null;

  return (
    <div ref={panelRef} className="relative hidden lg:block">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="flex h-[42px] items-center gap-2 rounded-[10px] bg-accent-soft px-5 text-[14.5px] font-semibold text-accent-dark"
      >
        <span className="font-symbols text-[20px]">apps</span>
        {HEADER_CATALOG_LABEL}
      </button>

      {isOpen && (
        <div className="absolute left-0 top-[calc(100%+12px)] z-20 grid w-[1100px] grid-cols-[262px_1fr_268px] overflow-hidden rounded-[14px] border border-border-soft bg-background shadow-[0_30px_60px_-30px_rgba(17,28,45,0.45)]">
          <div className="flex flex-col gap-1.5 border-r border-border-soft bg-surface-soft p-3.5">
            {categories.map((category) => {
              const isActive = category.id === activeCategoryId;
              const icon = CATALOG_CATEGORY_ICONS[category.slug] ?? CATALOG_CATEGORY_DEFAULT_ICON;

              return (
                <div
                  key={category.id}
                  onClick={() => setActiveCategoryId(category.id)}
                  className={`flex cursor-pointer items-center gap-2.5 rounded-[10px] border px-3 py-[11px] ${
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
                  <span className={`flex-1 text-sm ${isActive ? "font-semibold" : "font-medium"}`}>
                    {category.name}
                  </span>
                  {category.subs.length > 0 && (
                    <span
                      className={`font-symbols text-[18px] ${isActive ? "text-accent" : "text-muted-light"}`}
                    >
                      chevron_right
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          <div className="flex flex-col gap-3.5 px-6.5 py-5.5">
            <div className="text-base font-semibold text-foreground">{activeCategory.name}</div>
            <div className="columns-2 gap-9">
              {activeCategory.subs.map((sub) => (
                <Link
                  key={sub.id}
                  href={`/catalog/${sub.slug}`}
                  onClick={() => setIsOpen(false)}
                  className="block break-inside-avoid py-[7px] text-sm text-muted hover:text-accent"
                >
                  {sub.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="m-3.5 flex flex-col justify-center gap-3.5 rounded-xl bg-accent p-6.5 text-white">
            <span className="self-start rounded-md bg-white/15 px-2.5 py-1 text-[11px] font-bold tracking-[.08em]">
              {CATALOG_PANEL_PROMO.badge}
            </span>
            <div className="font-heading text-[23px] font-semibold leading-[1.15] tracking-tight">
              {CATALOG_PANEL_PROMO.title}
            </div>
            <div className="text-[13.5px] leading-[1.5] text-accent-soft">
              {CATALOG_PANEL_PROMO.description}
            </div>
            <div className="flex items-baseline gap-2.5">
              <span className="font-heading text-[26px] font-semibold">
                {CATALOG_PANEL_PROMO.price}
              </span>
              <span className="text-[13.5px] text-accent-soft/80 line-through">
                {CATALOG_PANEL_PROMO.oldPrice}
              </span>
            </div>
            <button
              type="button"
              className="h-11 rounded-[10px] bg-white text-sm font-semibold text-accent hover:bg-accent-soft"
            >
              {CATALOG_PANEL_PROMO.ctaLabel}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
