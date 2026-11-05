"use client";

import { useState } from "react";
import { toggleCatalogAttributeValueHelper } from "@/app/shared/products/helpers/toggle-catalog-attribute-value";
import { toggleCatalogCategoryIdHelper } from "@/app/shared/products/helpers/toggle-catalog-category-id";
import type {
  CatalogFilter,
  CatalogProductsQuery,
} from "@/app/shared/products/types/products.types";
import { parsePriceInputHelper } from "../../../../../../catalog-filters/helpers/parse-price-input";

/** Selections stay local until "show results" applies them to the URL. */
export const useCatalogFiltersDraft = (query: CatalogProductsQuery) => {
  const [priceFrom, setPriceFrom] = useState(query.priceFrom?.toString() ?? "");
  const [priceTo, setPriceTo] = useState(query.priceTo?.toString() ?? "");
  const [attributes, setAttributes] = useState<CatalogFilter[]>(query.attributes);
  const [categoryIds, setCategoryIds] = useState<string[]>(query.categoryIds);
  const [isAvailableOnly, setIsAvailableOnly] = useState(query.available === true);

  const draftQuery: CatalogProductsQuery = {
    ...query,
    page: 1,
    attributes,
    categoryIds,
    priceFrom: parsePriceInputHelper(priceFrom),
    priceTo: parsePriceInputHelper(priceTo),
    available: isAvailableOnly || undefined,
  };

  const toggleOption = (name: string, value: string) => {
    setAttributes((prev) => toggleCatalogAttributeValueHelper(prev, name, value));
  };

  const toggleCategory = (categoryId: string) => {
    setCategoryIds((prev) => toggleCatalogCategoryIdHelper(prev, categoryId));
  };

  const resetFilters = () => {
    setPriceFrom("");
    setPriceTo("");
    setAttributes([]);
    setCategoryIds([]);
    setIsAvailableOnly(false);
  };

  return {
    draftQuery,
    priceFrom,
    priceTo,
    attributes,
    categoryIds,
    isAvailableOnly,
    setPriceFrom,
    setPriceTo,
    setIsAvailableOnly,
    toggleOption,
    toggleCategory,
    resetFilters,
  };
};
