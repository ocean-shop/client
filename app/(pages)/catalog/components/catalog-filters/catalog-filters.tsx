"use client";

import { useState } from "react";
import { Button } from "@/app/ui/button/button";
import { Checkbox } from "@/app/ui/checkbox/checkbox";
import { Input } from "@/app/ui/input/input";
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
          <Input
            value={priceFrom}
            onChange={(event) => setPriceFrom(event.target.value)}
            placeholder={CATALOG_FILTERS_PRICE_FROM_PLACEHOLDER}
          />
          <span className="text-muted-light">—</span>
          <Input
            value={priceTo}
            onChange={(event) => setPriceTo(event.target.value)}
            placeholder={CATALOG_FILTERS_PRICE_TO_PLACEHOLDER}
          />
        </div>
        <Button>{CATALOG_FILTERS_APPLY_LABEL}</Button>
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
              <Button
                variant="ghost"
                size="auto"
                onClick={() => toggleGroupCollapsed(group.id)}
                aria-label={group.title}
                className="font-symbols text-[20px]"
              >
                {isCollapsed ? "expand_more" : "expand_less"}
              </Button>
            </div>

            {!isCollapsed && (
              <>
                <div className="flex flex-col gap-3">
                  {visibleOptions.map((option) => (
                    <Checkbox
                      key={option.id}
                      checked={selectedOptionIds.has(option.id)}
                      onChange={() => toggleOption(option.id)}
                      label={option.label}
                      count={option.count}
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
  );
}
