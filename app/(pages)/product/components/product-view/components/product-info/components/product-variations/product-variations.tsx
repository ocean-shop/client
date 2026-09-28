import { formatProductPriceHelper } from "@/app/shared/products/helpers/format-product-price";
import { Button } from "@/app/ui/button/button";
import {
  PRODUCT_VARIATIONS_FALLBACK_LABEL,
  PRODUCT_VARIATIONS_TITLE,
  PRODUCT_VARIATIONS_UNAVAILABLE_LABEL,
} from "./constants/product-variations.constants";
import type { ProductVariationsProps } from "./types/product-variations.types";

export function ProductVariations({
  variations,
  selectedVariationId,
  onSelect,
}: ProductVariationsProps) {
  return (
    <div className="flex flex-col gap-2.5">
      <div className="text-sm text-muted">{PRODUCT_VARIATIONS_TITLE}</div>

      <div className="flex flex-wrap gap-2.5">
        {variations.map((variation, index) => {
          const isSelected = variation.id === selectedVariationId;
          const label =
            variation.title ?? variation.name ?? PRODUCT_VARIATIONS_FALLBACK_LABEL(index);

          return (
            <Button
              key={variation.id}
              variant="unstyled"
              size="auto"
              onClick={() => onSelect(variation.id)}
              aria-pressed={isSelected}
              className={`flex flex-col items-start gap-0.5 rounded-xl border-[1.5px] px-4 py-2.5 text-left ${
                isSelected ? "border-accent bg-accent-soft" : "border-border-soft bg-background"
              } ${variation.available ? "" : "opacity-60"}`}
            >
              <span className="text-sm font-semibold text-foreground">{label}</span>
              <span className="text-[12.5px] text-muted-light">
                {variation.available
                  ? formatProductPriceHelper(variation.price)
                  : PRODUCT_VARIATIONS_UNAVAILABLE_LABEL}
              </span>
            </Button>
          );
        })}
      </div>
    </div>
  );
}
