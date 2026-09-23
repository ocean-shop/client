"use client";

import { useState } from "react";
import { Button } from "@/app/ui/button/button";
import { Checkbox } from "@/app/ui/checkbox/checkbox";
import { Input } from "@/app/ui/input/input";
import { hasCatalogAttributeValueHelper } from "@/app/shared/products/helpers/has-catalog-attribute-value";
import { toggleCatalogAttributeValueHelper } from "@/app/shared/products/helpers/toggle-catalog-attribute-value";
import type { CatalogFilter } from "@/app/shared/products/types/products.types";
import { useCatalogQuery } from "../../../../../../hooks/use-catalog-query";
import { parsePriceInputHelper } from "../../../../../catalog-filters/helpers/parse-price-input";
import {
  CATALOG_FILTERS_AVAILABILITY_LABEL,
  CATALOG_FILTERS_AVAILABLE_ONLY_LABEL,
  CATALOG_FILTERS_MORE_LABEL,
  CATALOG_FILTERS_PRICE_FROM_PLACEHOLDER,
  CATALOG_FILTERS_PRICE_LABEL,
  CATALOG_FILTERS_PRICE_TO_PLACEHOLDER,
  CATALOG_FILTERS_VISIBLE_OPTIONS_COUNT,
} from "../../../../../catalog-filters/constants/catalog-filters.constants";
import {
  CATALOG_FILTERS_SHEET_CLOSE_LABEL,
  CATALOG_FILTERS_SHEET_RESET_LABEL,
  CATALOG_FILTERS_SHEET_SHOW_RESULTS_LABEL,
  CATALOG_FILTERS_SHEET_TITLE,
} from "../../constants/catalog-filters-sheet.constants";
import type { CatalogFiltersSheetContentProps } from "./types/catalog-filters-sheet-content.types";

/** Selections stay local until "show results" applies them to the URL. */
export function CatalogFiltersSheetContent({
  onClose,
  resultsCount,
  groups,
  query,
}: CatalogFiltersSheetContentProps) {
  const { applyQuery, isPending } = useCatalogQuery(query);
  const [priceFrom, setPriceFrom] = useState(query.priceFrom?.toString() ?? "");
  const [priceTo, setPriceTo] = useState(query.priceTo?.toString() ?? "");
  const [attributes, setAttributes] = useState<CatalogFilter[]>(query.attributes);
  const [isAvailableOnly, setIsAvailableOnly] = useState(query.available === true);
  const [collapsedGroupIds, setCollapsedGroupIds] = useState<Set<string>>(new Set());
  const [expandedGroupIds, setExpandedGroupIds] = useState<Set<string>>(new Set());

  function toggleOption(name: string, value: string) {
    setAttributes((prev) => toggleCatalogAttributeValueHelper(prev, name, value));
  }

  function toggleGroupCollapsed(groupId: string) {
    setCollapsedGroupIds((prev) => {
      const next = new Set(prev);
      if (next.has(groupId)) next.delete(groupId);
      else next.add(groupId);
      return next;
    });
  }

  function expandGroup(groupId: string) {
    setExpandedGroupIds((prev) => new Set(prev).add(groupId));
  }

  function resetFilters() {
    setPriceFrom("");
    setPriceTo("");
    setAttributes([]);
    setIsAvailableOnly(false);
  }

  function showResults() {
    applyQuery({
      attributes,
      priceFrom: parsePriceInputHelper(priceFrom),
      priceTo: parsePriceInputHelper(priceTo),
      available: isAvailableOnly || undefined,
    });
    onClose();
  }

  return (
    <>
      <div className="flex items-center gap-3 border-b border-border-soft bg-background px-4.5 py-4">
        <span className="flex-1 font-heading text-[19px] font-semibold tracking-[-.02em] text-foreground">
          {CATALOG_FILTERS_SHEET_TITLE}
        </span>
        <Button variant="text" size="auto" onClick={resetFilters} className="text-[13.5px]">
          {CATALOG_FILTERS_SHEET_RESET_LABEL}
        </Button>
        <Button
          variant="outline"
          size="auto"
          onClick={onClose}
          aria-label={CATALOG_FILTERS_SHEET_CLOSE_LABEL}
          className="h-[38px] w-[38px] rounded-[11px] p-0 font-symbols text-[21px] text-foreground"
        >
          close
        </Button>
      </div>

      <div className="flex min-h-0 flex-1 flex-col overflow-y-auto bg-surface-soft pb-24 [scrollbar-width:none]">
        <div className="flex flex-col gap-3.5 border-b border-border-soft bg-background p-4.5">
          <div className="text-[15px] font-semibold text-foreground">
            {CATALOG_FILTERS_PRICE_LABEL}
          </div>
          <div className="flex items-center gap-2.5">
            <Input
              size="lg"
              type="number"
              min={0}
              value={priceFrom}
              onChange={(event) => setPriceFrom(event.target.value)}
              placeholder={CATALOG_FILTERS_PRICE_FROM_PLACEHOLDER}
            />
            <span className="text-muted-light">—</span>
            <Input
              size="lg"
              type="number"
              min={0}
              value={priceTo}
              onChange={(event) => setPriceTo(event.target.value)}
              placeholder={CATALOG_FILTERS_PRICE_TO_PLACEHOLDER}
            />
          </div>
        </div>

        <div className="flex flex-col gap-3.5 border-b border-border-soft bg-background p-4.5">
          <div className="text-[15px] font-semibold text-foreground">
            {CATALOG_FILTERS_AVAILABILITY_LABEL}
          </div>
          <Checkbox
            checked={isAvailableOnly}
            onChange={setIsAvailableOnly}
            label={CATALOG_FILTERS_AVAILABLE_ONLY_LABEL}
            wrapperClassName="min-h-11"
          />
        </div>

        {groups.map((group) => {
          const isCollapsed = collapsedGroupIds.has(group.id);
          const isExpanded = expandedGroupIds.has(group.id);
          const visibleOptions = isExpanded
            ? group.options
            : group.options.slice(0, CATALOG_FILTERS_VISIBLE_OPTIONS_COUNT);
          const hasMore =
            !isExpanded && group.options.length > CATALOG_FILTERS_VISIBLE_OPTIONS_COUNT;

          return (
            <div
              key={group.id}
              className="flex flex-col gap-3.5 border-b border-border-soft bg-background p-4.5"
            >
              <div className="flex items-center justify-between">
                <span className="text-[15px] font-semibold text-foreground">{group.title}</span>
                <Button
                  variant="ghost"
                  size="auto"
                  onClick={() => toggleGroupCollapsed(group.id)}
                  aria-label={group.title}
                  className="font-symbols text-[21px]"
                >
                  {isCollapsed ? "expand_more" : "expand_less"}
                </Button>
              </div>

              {!isCollapsed && (
                <>
                  <div className="flex flex-col">
                    {visibleOptions.map((option) => (
                      <Checkbox
                        key={option.id}
                        checked={hasCatalogAttributeValueHelper(
                          attributes,
                          group.name,
                          option.value
                        )}
                        onChange={() => toggleOption(group.name, option.value)}
                        label={option.label}
                        count={option.count}
                        wrapperClassName="min-h-11"
                      />
                    ))}
                  </div>

                  {hasMore && (
                    <Button
                      variant="text"
                      size="auto"
                      onClick={() => expandGroup(group.id)}
                      className="self-start text-[13.5px]"
                    >
                      {CATALOG_FILTERS_MORE_LABEL}
                    </Button>
                  )}
                </>
              )}
            </div>
          );
        })}
      </div>

      <div className="absolute inset-x-0 bottom-0 flex gap-2.5 border-t border-border-soft bg-background p-3.5 pb-5">
        <Button
          variant="outline"
          size="auto"
          onClick={resetFilters}
          className="h-[50px] w-[110px] flex-none rounded-xl px-2 text-[14.5px] font-semibold"
        >
          {CATALOG_FILTERS_SHEET_RESET_LABEL}
        </Button>
        <Button
          size="auto"
          onClick={showResults}
          disabled={isPending}
          className="h-[50px] flex-1 rounded-xl text-[14.5px] font-semibold"
        >
          {CATALOG_FILTERS_SHEET_SHOW_RESULTS_LABEL} {resultsCount.toLocaleString("uk-UA")} товарів
        </Button>
      </div>
    </>
  );
}
