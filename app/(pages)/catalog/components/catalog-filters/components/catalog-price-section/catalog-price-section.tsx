import { Input } from "@/app/ui/input/input";
import { CatalogFilterSection } from "../catalog-filter-section/catalog-filter-section";
import {
  CATALOG_PRICE_SECTION_FROM_PLACEHOLDER,
  CATALOG_PRICE_SECTION_INPUT_SIZES,
  CATALOG_PRICE_SECTION_TITLE,
  CATALOG_PRICE_SECTION_TO_PLACEHOLDER,
} from "./constants/catalog-price-section.constants";
import type { CatalogPriceSectionProps } from "./types/catalog-price-section.types";

/** The price range inputs; the caller decides when the typed values take effect. */
export const CatalogPriceSection = ({
  variant,
  fromValue,
  toValue,
  onFromChange,
  onToChange,
  children,
}: CatalogPriceSectionProps) => {
  const inputSize = CATALOG_PRICE_SECTION_INPUT_SIZES[variant];

  return (
    <CatalogFilterSection variant={variant} title={CATALOG_PRICE_SECTION_TITLE}>
      <div className="flex items-center gap-2.5">
        <Input
          size={inputSize}
          type="number"
          min={0}
          value={fromValue}
          onChange={(event) => onFromChange(event.target.value)}
          placeholder={CATALOG_PRICE_SECTION_FROM_PLACEHOLDER}
        />
        <span className="text-muted-light">—</span>
        <Input
          size={inputSize}
          type="number"
          min={0}
          value={toValue}
          onChange={(event) => onToChange(event.target.value)}
          placeholder={CATALOG_PRICE_SECTION_TO_PLACEHOLDER}
        />
      </div>

      {children}
    </CatalogFilterSection>
  );
};
