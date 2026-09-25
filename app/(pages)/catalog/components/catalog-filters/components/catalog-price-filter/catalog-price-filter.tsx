"use client";

import { useState } from "react";
import { Button } from "@/app/ui/button/button";
import { Input } from "@/app/ui/input/input";
import { parsePriceInputHelper } from "../../helpers/parse-price-input";
import {
  CATALOG_FILTERS_APPLY_LABEL,
  CATALOG_FILTERS_PRICE_FROM_PLACEHOLDER,
  CATALOG_FILTERS_PRICE_LABEL,
  CATALOG_FILTERS_PRICE_TO_PLACEHOLDER,
} from "../../constants/catalog-filters.constants";
import type { CatalogPriceFilterProps } from "./types/catalog-price-filter.types";

/**
 * Holds the price range as draft input until applied. The parent remounts this
 * component (via `key`) whenever the applied range changes, which reseeds the inputs.
 */
export function CatalogPriceFilter({ priceFrom, priceTo, onApply }: CatalogPriceFilterProps) {
  const [fromInput, setFromInput] = useState(priceFrom?.toString() ?? "");
  const [toInput, setToInput] = useState(priceTo?.toString() ?? "");

  function apply() {
    onApply({
      priceFrom: parsePriceInputHelper(fromInput),
      priceTo: parsePriceInputHelper(toInput),
    });
  }

  return (
    <div className="flex flex-col gap-3.5 rounded-2xl bg-background p-5">
      <div className="text-[15px] font-semibold text-foreground">{CATALOG_FILTERS_PRICE_LABEL}</div>
      <div className="flex items-center gap-2.5">
        <Input
          type="number"
          min={0}
          value={fromInput}
          onChange={(event) => setFromInput(event.target.value)}
          placeholder={CATALOG_FILTERS_PRICE_FROM_PLACEHOLDER}
        />
        <span className="text-muted-light">—</span>
        <Input
          type="number"
          min={0}
          value={toInput}
          onChange={(event) => setToInput(event.target.value)}
          placeholder={CATALOG_FILTERS_PRICE_TO_PLACEHOLDER}
        />
      </div>
      <Button onClick={apply}>{CATALOG_FILTERS_APPLY_LABEL}</Button>
    </div>
  );
}
