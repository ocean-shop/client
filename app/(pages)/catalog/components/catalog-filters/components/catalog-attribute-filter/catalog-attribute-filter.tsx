"use client";

import { useState } from "react";
import { hasCatalogAttributeValueHelper } from "@/app/shared/products/helpers/has-catalog-attribute-value";
import { Button } from "@/app/ui/button/button";
import { Checkbox } from "@/app/ui/checkbox/checkbox";
import { MaterialIcon } from "@/app/ui/material-icon/material-icon";
import { CATALOG_FILTERS_ROW_CLASS_NAMES } from "../../constants/catalog-filters.constants";
import { CatalogFilterSection } from "../catalog-filter-section/catalog-filter-section";
import {
  CATALOG_ATTRIBUTE_FILTER_ICON_CLASS_NAMES,
  CATALOG_ATTRIBUTE_FILTER_MORE_LABEL,
  CATALOG_ATTRIBUTE_FILTER_OPTIONS_CLASS_NAMES,
  CATALOG_ATTRIBUTE_FILTER_VISIBLE_OPTIONS_COUNT,
} from "./constants/catalog-attribute-filter.constants";
import type { CatalogAttributeFilterProps } from "./types/catalog-attribute-filter.types";

/** One attribute as a collapsible list of checkboxes, trimmed until "show more" is pressed. */
export const CatalogAttributeFilter = ({
  variant,
  group,
  selectedAttributes,
  onToggle,
}: CatalogAttributeFilterProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const visibleOptions = isExpanded
    ? group.options
    : group.options.slice(0, CATALOG_ATTRIBUTE_FILTER_VISIBLE_OPTIONS_COUNT);
  const hasMore =
    !isExpanded && group.options.length > CATALOG_ATTRIBUTE_FILTER_VISIBLE_OPTIONS_COUNT;

  return (
    <CatalogFilterSection
      variant={variant}
      title={group.title}
      action={
        <Button
          variant="ghost"
          size="auto"
          onClick={() => setIsCollapsed((previous) => !previous)}
          aria-label={group.title}
        >
          <MaterialIcon
            name={isCollapsed ? "expand_more" : "expand_less"}
            className={CATALOG_ATTRIBUTE_FILTER_ICON_CLASS_NAMES[variant]}
          />
        </Button>
      }
    >
      {!isCollapsed && (
        <>
          <div className={`flex flex-col ${CATALOG_ATTRIBUTE_FILTER_OPTIONS_CLASS_NAMES[variant]}`}>
            {visibleOptions.map((option) => (
              <Checkbox
                key={option.id}
                checked={hasCatalogAttributeValueHelper(
                  selectedAttributes,
                  group.name,
                  option.value
                )}
                onChange={() => onToggle(group.name, option.value)}
                label={option.label}
                count={option.count}
                wrapperClassName={CATALOG_FILTERS_ROW_CLASS_NAMES[variant]}
              />
            ))}
          </div>

          {hasMore && (
            <Button
              variant="text"
              size="auto"
              onClick={() => setIsExpanded(true)}
              className="self-start text-[13.5px]"
            >
              {CATALOG_ATTRIBUTE_FILTER_MORE_LABEL}
            </Button>
          )}
        </>
      )}
    </CatalogFilterSection>
  );
};
