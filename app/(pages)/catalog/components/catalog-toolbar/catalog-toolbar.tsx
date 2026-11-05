"use client";

import { useState } from "react";
import { Button } from "@/app/ui/button/button";
import { CountBadge } from "@/app/ui/count-badge/count-badge";
import { MaterialIcon } from "@/app/ui/material-icon/material-icon";
import { countCatalogActiveFiltersHelper } from "@/app/shared/products/helpers/count-catalog-active-filters";
import {
  CATALOG_PRODUCTS_DEFAULT_SORT,
  CATALOG_PRODUCT_SORT_OPTIONS,
} from "@/app/shared/products/constants/products.constants";
import type {
  CatalogProductSort,
  CatalogProductsQuery,
} from "@/app/shared/products/types/products.types";
import { CATALOG_TOOLBAR_CLASS_NAME } from "../../constants/catalog.constants";
import { useCatalogQuery } from "../../hooks/use-catalog-query";
import { CatalogFiltersSheet } from "./components/catalog-filters-sheet/catalog-filters-sheet";
import { CatalogSortSheet } from "./components/catalog-sort-sheet/catalog-sort-sheet";
import {
  CATALOG_TOOLBAR_FILTERS_LABEL,
  CATALOG_TOOLBAR_SORT_LABEL,
} from "./constants/catalog-toolbar.constants";
import type { CatalogToolbarProps } from "./types/catalog-toolbar.types";

export const CatalogToolbar = ({
  source,
  query,
  resultsCount,
  filterGroups,
  filterCategories,
}: CatalogToolbarProps) => {
  const { applyQuery, isPending } = useCatalogQuery(query);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);

  const handleSortSelect = (sortId: string) => {
    setIsSortOpen(false);
    applyQuery({ sort: sortId as CatalogProductSort });
  };

  /**
   * Applying from the toolbar rather than from inside the sheet: closing the sheet unmounts
   * its content, which would end the transition before the new products arrive.
   */
  const handleFiltersApply = (nextQuery: CatalogProductsQuery) => {
    setIsFiltersOpen(false);
    applyQuery(nextQuery);
  };

  return (
    <>
      <div className={CATALOG_TOOLBAR_CLASS_NAME}>
        <Button
          variant="outline"
          onClick={() => setIsFiltersOpen(true)}
          className="h-11 flex-1 gap-2"
        >
          <MaterialIcon name="tune" className="text-[19px] text-accent" />
          {CATALOG_TOOLBAR_FILTERS_LABEL}
          <CountBadge count={countCatalogActiveFiltersHelper(query)} size="md" />
        </Button>

        <Button variant="outline" onClick={() => setIsSortOpen(true)} className="h-11 flex-1 gap-2">
          <MaterialIcon name="swap_vert" className="text-[19px] text-accent" />
          {CATALOG_TOOLBAR_SORT_LABEL}
        </Button>
      </div>

      <CatalogFiltersSheet
        isOpen={isFiltersOpen}
        onClose={() => setIsFiltersOpen(false)}
        onApply={handleFiltersApply}
        isApplying={isPending}
        source={source}
        resultsCount={resultsCount}
        groups={filterGroups}
        categories={filterCategories}
        query={query}
      />

      <CatalogSortSheet
        isOpen={isSortOpen}
        onClose={() => setIsSortOpen(false)}
        options={CATALOG_PRODUCT_SORT_OPTIONS}
        selectedId={query.sort ?? CATALOG_PRODUCTS_DEFAULT_SORT}
        onSelect={handleSortSelect}
      />
    </>
  );
};
