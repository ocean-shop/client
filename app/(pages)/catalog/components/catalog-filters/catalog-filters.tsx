"use client";

import { Button } from "@/app/ui/button/button";
import { countCatalogActiveFiltersHelper } from "@/app/shared/products/helpers/count-catalog-active-filters";
import { toggleCatalogAttributeValueHelper } from "@/app/shared/products/helpers/toggle-catalog-attribute-value";
import { toggleCatalogCategoryIdHelper } from "@/app/shared/products/helpers/toggle-catalog-category-id";
import { useCatalogQuery } from "../../hooks/use-catalog-query";
import { CatalogAttributeFilter } from "./components/catalog-attribute-filter/catalog-attribute-filter";
import { CatalogAvailabilityFilter } from "./components/catalog-availability-filter/catalog-availability-filter";
import { CatalogCategoryFilter } from "./components/catalog-category-filter/catalog-category-filter";
import { CatalogPriceFilter } from "./components/catalog-price-filter/catalog-price-filter";
import { CATALOG_FILTERS_RESET_LABEL } from "./constants/catalog-filters.constants";
import type { CatalogFiltersProps } from "./types/catalog-filters.types";

export const CatalogFilters = ({ groups, categories, query }: CatalogFiltersProps) => {
  const { applyQuery, isPending } = useCatalogQuery(query);

  const toggleOption = (name: string, value: string) => {
    applyQuery({ attributes: toggleCatalogAttributeValueHelper(query.attributes, name, value) });
  };

  const toggleCategory = (categoryId: string) => {
    applyQuery({ categoryIds: toggleCatalogCategoryIdHelper(query.categoryIds, categoryId) });
  };

  const resetFilters = () => {
    applyQuery({
      attributes: [],
      categoryIds: [],
      priceFrom: undefined,
      priceTo: undefined,
      available: undefined,
    });
  };

  return (
    <div className={`flex flex-col gap-3.5 ${isPending ? "pointer-events-none opacity-60" : ""}`}>
      {categories && (
        <CatalogCategoryFilter
          variant="card"
          categories={categories}
          selectedIds={query.categoryIds}
          onToggle={toggleCategory}
        />
      )}

      <CatalogPriceFilter
        key={`${query.priceFrom ?? ""}:${query.priceTo ?? ""}`}
        priceFrom={query.priceFrom}
        priceTo={query.priceTo}
        onApply={applyQuery}
      />

      <CatalogAvailabilityFilter
        variant="card"
        checked={query.available === true}
        onChange={(checked) => applyQuery({ available: checked || undefined })}
      />

      {groups.map((group) => (
        <CatalogAttributeFilter
          key={group.id}
          variant="card"
          group={group}
          selectedAttributes={query.attributes}
          onToggle={toggleOption}
        />
      ))}

      {countCatalogActiveFiltersHelper(query) > 0 && (
        <Button variant="outline" onClick={resetFilters}>
          {CATALOG_FILTERS_RESET_LABEL}
        </Button>
      )}
    </div>
  );
};
