import { PRODUCT_DESCRIPTION_TITLE } from "./constants/product-description.constants";
import type { ProductDescriptionProps } from "./types/product-description.types";

export function ProductDescription({ description }: ProductDescriptionProps) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl bg-background p-5">
      <h2 className="text-[14.5px] font-semibold text-foreground">{PRODUCT_DESCRIPTION_TITLE}</h2>

      {/* Descriptions are authored as plain text, so their line breaks are kept as typed. */}
      <p className="whitespace-pre-line text-pretty text-[14.5px] leading-[1.65] text-muted">
        {description}
      </p>
    </div>
  );
}
