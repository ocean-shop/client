"use client";

import { useCatalogProductsCount } from "../../../../../../hooks/use-catalog-products-count";
import { CatalogAttributeFilter } from "../../../../../catalog-filters/components/catalog-attribute-filter/catalog-attribute-filter";
import { CatalogAvailabilityFilter } from "../../../../../catalog-filters/components/catalog-availability-filter/catalog-availability-filter";
import { CatalogCategoryFilter } from "../../../../../catalog-filters/components/catalog-category-filter/catalog-category-filter";
import { CatalogPriceSection } from "../../../../../catalog-filters/components/catalog-price-section/catalog-price-section";
import { CatalogFiltersSheetFooter } from "./components/catalog-filters-sheet-footer/catalog-filters-sheet-footer";
import { CatalogFiltersSheetHeader } from "./components/catalog-filters-sheet-header/catalog-filters-sheet-header";
import { useCatalogFiltersDraft } from "./hooks/use-catalog-filters-draft";
import type { CatalogFiltersSheetContentProps } from "./types/catalog-filters-sheet-content.types";

export const CatalogFiltersSheetContent = ({
  isOpen,
  onClose,
  onApply,
  isApplying,
  source,
  resultsCount,
  groups,
  categories,
  query,
}: CatalogFiltersSheetContentProps) => {
  const draft = useCatalogFiltersDraft(query);
  const { count, isCounting } = useCatalogProductsCount(source, draft.draftQuery, isOpen);

  return (
    <>
      <CatalogFiltersSheetHeader onReset={draft.resetFilters} onClose={onClose} />

      <div className="flex min-h-0 flex-1 flex-col overflow-y-auto bg-surface-soft pb-24 [scrollbar-width:none]">
        {categories && (
          <CatalogCategoryFilter
            variant="sheet"
            categories={categories}
            selectedIds={draft.categoryIds}
            onToggle={draft.toggleCategory}
          />
        )}

        <CatalogPriceSection
          variant="sheet"
          fromValue={draft.priceFrom}
          toValue={draft.priceTo}
          onFromChange={draft.setPriceFrom}
          onToChange={draft.setPriceTo}
        />

        <CatalogAvailabilityFilter
          variant="sheet"
          checked={draft.isAvailableOnly}
          onChange={draft.setIsAvailableOnly}
        />

        {groups.map((group) => (
          <CatalogAttributeFilter
            key={group.id}
            variant="sheet"
            group={group}
            selectedAttributes={draft.attributes}
            onToggle={draft.toggleOption}
          />
        ))}
      </div>

      <CatalogFiltersSheetFooter
        onReset={draft.resetFilters}
        onShowResults={() => onApply(draft.draftQuery)}
        isApplying={isApplying}
        isCounting={isCounting}
        /* Falls back to the applied total until the first draft count arrives. */
        count={count ?? resultsCount}
      />
    </>
  );
};
