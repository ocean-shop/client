"use client";

import { useState } from "react";
import { Button } from "@/app/ui/button/button";
import { CatalogFiltersSheet } from "./components/catalog-filters-sheet/catalog-filters-sheet";
import { CatalogSortSheet } from "./components/catalog-sort-sheet/catalog-sort-sheet";
import {
  CATALOG_TOOLBAR_FILTERS_LABEL,
  CATALOG_TOOLBAR_SORT_LABEL,
} from "./constants/catalog-toolbar.constants";
import type { CatalogToolbarProps } from "./types/catalog-toolbar.types";

export function CatalogToolbar({
  sortOptions,
  defaultSortId,
  onSortChange,
  resultsCount,
  filterGroups,
}: CatalogToolbarProps) {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [filterCount, setFilterCount] = useState(0);
  const [selectedSortId, setSelectedSortId] = useState(defaultSortId ?? sortOptions[0]?.id);

  function handleSortSelect(sortId: string) {
    setSelectedSortId(sortId);
    setIsSortOpen(false);
    onSortChange?.(sortId);
  }

  return (
    <>
      <div className="sticky top-[var(--mobile-header-height)] z-20 flex gap-2.5 border-t border-border-soft bg-background px-4.5 py-2.5 lg:hidden">
        <Button
          variant="outline"
          onClick={() => setIsFiltersOpen(true)}
          className="h-11 flex-1 gap-2"
        >
          <span className="font-symbols text-[19px] text-accent">tune</span>
          {CATALOG_TOOLBAR_FILTERS_LABEL}
          {filterCount > 0 && (
            <span className="flex h-[19px] min-w-[19px] items-center justify-center rounded-full bg-accent px-1.5 text-[11px] font-bold text-white">
              {filterCount}
            </span>
          )}
        </Button>

        <Button variant="outline" onClick={() => setIsSortOpen(true)} className="h-11 flex-1 gap-2">
          <span className="font-symbols text-[19px] text-accent">swap_vert</span>
          {CATALOG_TOOLBAR_SORT_LABEL}
        </Button>
      </div>

      <CatalogFiltersSheet
        isOpen={isFiltersOpen}
        onClose={() => setIsFiltersOpen(false)}
        onSelectedCountChange={setFilterCount}
        resultsCount={resultsCount}
        groups={filterGroups}
      />

      <CatalogSortSheet
        isOpen={isSortOpen}
        onClose={() => setIsSortOpen(false)}
        options={sortOptions}
        selectedId={selectedSortId}
        onSelect={handleSortSelect}
      />
    </>
  );
}
