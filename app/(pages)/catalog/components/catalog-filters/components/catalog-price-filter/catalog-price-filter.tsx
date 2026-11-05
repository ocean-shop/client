"use client";

import { useState } from "react";
import { Button } from "@/app/ui/button/button";
import { parsePriceInputHelper } from "../../helpers/parse-price-input";
import { CatalogPriceSection } from "../catalog-price-section/catalog-price-section";
import { CATALOG_PRICE_FILTER_APPLY_LABEL } from "./constants/catalog-price-filter.constants";
import type { CatalogPriceFilterProps } from "./types/catalog-price-filter.types";

/**
 * Holds the price range as draft input until applied. The parent remounts this
 * component (via `key`) whenever the applied range changes, which reseeds the inputs.
 */
export const CatalogPriceFilter = ({ priceFrom, priceTo, onApply }: CatalogPriceFilterProps) => {
  const [fromInput, setFromInput] = useState(priceFrom?.toString() ?? "");
  const [toInput, setToInput] = useState(priceTo?.toString() ?? "");

  const apply = () => {
    onApply({
      priceFrom: parsePriceInputHelper(fromInput),
      priceTo: parsePriceInputHelper(toInput),
    });
  };

  return (
    <CatalogPriceSection
      variant="card"
      fromValue={fromInput}
      toValue={toInput}
      onFromChange={setFromInput}
      onToChange={setToInput}
    >
      <Button onClick={apply}>{CATALOG_PRICE_FILTER_APPLY_LABEL}</Button>
    </CatalogPriceSection>
  );
};
