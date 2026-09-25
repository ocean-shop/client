"use client";

import { useState } from "react";
import { Button } from "@/app/ui/button/button";
import { Checkbox } from "@/app/ui/checkbox/checkbox";
import { countCatalogActiveFiltersHelper } from "@/app/shared/products/helpers/count-catalog-active-filters";
import { hasCatalogAttributeValueHelper } from "@/app/shared/products/helpers/has-catalog-attribute-value";
import { toggleCatalogAttributeValueHelper } from "@/app/shared/products/helpers/toggle-catalog-attribute-value";
import { useCatalogQuery } from "../../hooks/use-catalog-query";
import { CatalogPriceFilter } from "./components/catalog-price-filter/catalog-price-filter";
import {
  CATALOG_FILTERS_AVAILABILITY_LABEL,
  CATALOG_FILTERS_AVAILABLE_ONLY_LABEL,
  CATALOG_FILTERS_MORE_LABEL,
  CATALOG_FILTERS_RESET_LABEL,
  CATALOG_FILTERS_VISIBLE_OPTIONS_COUNT,
} from "./constants/catalog-filters.constants";
import type { CatalogFiltersProps } from "./types/catalog-filters.types";

export function CatalogFilters({ groups, query }: CatalogFiltersProps) {
  const { applyQuery, isPending } = useCatalogQuery(query);
  const [collapsedGroupIds, setCollapsedGroupIds] = useState<Set<string>>(new Set());
  const [expandedGroupIds, setExpandedGroupIds] = useState<Set<string>>(new Set());

  function toggleOption(name: string, value: string) {
    applyQuery({ attributes: toggleCatalogAttributeValueHelper(query.attributes, name, value) });
  }

  function resetFilters() {
    applyQuery({ attributes: [], priceFrom: undefined, priceTo: undefined, available: undefined });
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
    <div className={`flex flex-col gap-3.5 ${isPending ? "pointer-events-none opacity-60" : ""}`}>
      <CatalogPriceFilter
        key={`${query.priceFrom ?? ""}:${query.priceTo ?? ""}`}
        priceFrom={query.priceFrom}
        priceTo={query.priceTo}
        onApply={applyQuery}
      />

      <div className="flex flex-col gap-3 rounded-2xl bg-background p-5">
        <span className="text-[15px] font-semibold text-foreground">
          {CATALOG_FILTERS_AVAILABILITY_LABEL}
        </span>
        <Checkbox
          checked={query.available === true}
          onChange={(checked) => applyQuery({ available: checked || undefined })}
          label={CATALOG_FILTERS_AVAILABLE_ONLY_LABEL}
        />
      </div>

      {groups.map((group) => {
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
                      checked={hasCatalogAttributeValueHelper(
                        query.attributes,
                        group.name,
                        option.value
                      )}
                      onChange={() => toggleOption(group.name, option.value)}
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

      {countCatalogActiveFiltersHelper(query) > 0 && (
        <Button variant="outline" onClick={resetFilters}>
          {CATALOG_FILTERS_RESET_LABEL}
        </Button>
      )}
    </div>
  );
}
