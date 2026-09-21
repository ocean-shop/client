"use client";

import { useState } from "react";
import {
  CATALOG_FILTERS_APPLY_LABEL,
  CATALOG_FILTERS_MORE_LABEL,
  CATALOG_FILTERS_PRICE_FROM_PLACEHOLDER,
  CATALOG_FILTERS_PRICE_LABEL,
  CATALOG_FILTERS_PRICE_TO_PLACEHOLDER,
  CATALOG_FILTERS_VISIBLE_OPTIONS_COUNT,
  CATALOG_FILTER_GROUPS,
} from "./constants/catalog-filters.constants";

export function CatalogFilters() {
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
  const [selectedOptionIds, setSelectedOptionIds] = useState<Set<string>>(new Set());
  const [collapsedGroupIds, setCollapsedGroupIds] = useState<Set<string>>(new Set());
  const [expandedGroupIds, setExpandedGroupIds] = useState<Set<string>>(new Set());

  function toggleOption(optionId: string) {
    setSelectedOptionIds((prev) => {
      const next = new Set(prev);
      if (next.has(optionId)) next.delete(optionId);
      else next.add(optionId);
      return next;
    });
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

  return (
    <div className="flex flex-col gap-3.5">
      <div className="flex flex-col gap-3.5 rounded-2xl bg-background p-5">
        <div className="text-[15px] font-semibold text-foreground">
          {CATALOG_FILTERS_PRICE_LABEL}
        </div>
        <div className="flex items-center gap-2.5">
          <input
            value={priceFrom}
            onChange={(event) => setPriceFrom(event.target.value)}
            placeholder={CATALOG_FILTERS_PRICE_FROM_PLACEHOLDER}
            className="h-[42px] w-full min-w-0 rounded-[10px] border border-footer-border bg-surface-soft px-3 text-sm text-foreground placeholder:text-muted-light"
          />
          <span className="text-muted-light">—</span>
          <input
            value={priceTo}
            onChange={(event) => setPriceTo(event.target.value)}
            placeholder={CATALOG_FILTERS_PRICE_TO_PLACEHOLDER}
            className="h-[42px] w-full min-w-0 rounded-[10px] border border-footer-border bg-surface-soft px-3 text-sm text-foreground placeholder:text-muted-light"
          />
        </div>
        <button
          type="button"
          className="h-[42px] rounded-[10px] bg-accent text-sm font-semibold text-white hover:bg-accent-dark"
        >
          {CATALOG_FILTERS_APPLY_LABEL}
        </button>
      </div>

      {CATALOG_FILTER_GROUPS.map((group) => {
        const isCollapsed = collapsedGroupIds.has(group.id);
        const isExpanded = expandedGroupIds.has(group.id);
        const visibleOptions = isExpanded
          ? group.options
          : group.options.slice(0, CATALOG_FILTERS_VISIBLE_OPTIONS_COUNT);
        const hasMore = !isExpanded && group.options.length > CATALOG_FILTERS_VISIBLE_OPTIONS_COUNT;

        return (
          <div key={group.id} className="flex flex-col gap-3 rounded-2xl bg-background p-5">
            <div className="flex items-center justify-between">
              <span className="text-[15px] font-semibold text-foreground">{group.title}</span>
              <button
                type="button"
                onClick={() => toggleGroupCollapsed(group.id)}
                aria-label={group.title}
                className="font-symbols text-[20px] text-muted-light"
              >
                {isCollapsed ? "expand_more" : "expand_less"}
              </button>
            </div>

            {!isCollapsed && (
              <>
                <div className="flex flex-col gap-3">
                  {visibleOptions.map((option) => {
                    const isSelected = selectedOptionIds.has(option.id);

                    return (
                      <div
                        key={option.id}
                        onClick={() => toggleOption(option.id)}
                        className="flex cursor-pointer items-center gap-2.5"
                      >
                        <span
                          className={`flex h-[19px] w-[19px] flex-none items-center justify-center rounded-[5px] border-[1.5px] font-symbols text-[15px] text-white ${
                            isSelected
                              ? "border-accent bg-accent"
                              : "border-footer-border bg-background"
                          }`}
                        >
                          {isSelected && "check"}
                        </span>
                        <span className="flex-1 text-sm text-foreground">{option.label}</span>
                        <span className="text-[12.5px] text-muted-light">{option.count}</span>
                      </div>
                    );
                  })}
                </div>

                {hasMore && (
                  <button
                    type="button"
                    onClick={() => expandGroup(group.id)}
                    className="self-start text-[13.5px] font-semibold text-accent"
                  >
                    {CATALOG_FILTERS_MORE_LABEL}
                  </button>
                )}
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}
