"use client";

import { useState } from "react";
import { Button } from "@/app/ui/button/button";
import { Checkbox } from "@/app/ui/checkbox/checkbox";
import { CatalogFilterSection } from "../catalog-filter-section/catalog-filter-section";
import {
  CATALOG_CATEGORY_FILTER_INDENT_STEP,
  CATALOG_CATEGORY_FILTER_LESS_LABEL,
  CATALOG_CATEGORY_FILTER_MORE_LABEL,
  CATALOG_CATEGORY_FILTER_ROW_CLASS_NAMES,
  CATALOG_CATEGORY_FILTER_TITLE,
  CATALOG_CATEGORY_FILTER_VISIBLE_ROWS_COUNT,
} from "./constants/catalog-category-filter.constants";
import { buildCatalogCategoryRowsHelper } from "./helpers/build-catalog-category-rows";
import type { CatalogCategoryFilterProps } from "./types/catalog-category-filter.types";

/**
 * The categories holding the products a search matched, as a tree of checkboxes.
 *
 * Search only: a category page is already scoped to one category, so there is nothing
 * left for it to narrow to.
 */
export const CatalogCategoryFilter = ({
  variant,
  categories,
  selectedIds,
  onToggle,
}: CatalogCategoryFilterProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const rows = buildCatalogCategoryRowsHelper(categories);
  if (rows.length === 0) return null;

  const visibleRows = isExpanded ? rows : rows.slice(0, CATALOG_CATEGORY_FILTER_VISIBLE_ROWS_COUNT);
  const hasMore = rows.length > CATALOG_CATEGORY_FILTER_VISIBLE_ROWS_COUNT;

  return (
    <CatalogFilterSection variant={variant} title={CATALOG_CATEGORY_FILTER_TITLE}>
      <div className="flex flex-col gap-1.5">
        {visibleRows.map((row) => {
          const isSelected = selectedIds.includes(row.id);

          return (
            <div
              key={row.id}
              style={{ paddingInlineStart: row.depth * CATALOG_CATEGORY_FILTER_INDENT_STEP }}
            >
              <Checkbox
                checked={isSelected}
                onChange={() => onToggle(row.id)}
                label={<span className={isSelected ? "font-semibold" : ""}>{row.label}</span>}
                wrapperClassName={CATALOG_CATEGORY_FILTER_ROW_CLASS_NAMES[variant]}
              />
            </div>
          );
        })}
      </div>

      {hasMore && (
        <Button
          variant="text"
          size="auto"
          onClick={() => setIsExpanded((previous) => !previous)}
          className="self-start text-[13.5px]"
        >
          {isExpanded ? CATALOG_CATEGORY_FILTER_LESS_LABEL : CATALOG_CATEGORY_FILTER_MORE_LABEL}
        </Button>
      )}
    </CatalogFilterSection>
  );
};
