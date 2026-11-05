import { PRODUCT_DISCOUNT_BADGE_LABEL } from "@/app/shared/products/constants/products.constants";
import { formatProductPriceHelper } from "@/app/shared/products/helpers/format-product-price";
import { SurfaceCard } from "@/app/ui/surface-card/surface-card";
import type { ProductPriceProps } from "./types/product-price.types";

export const ProductPrice = ({ offer, discountPercent }: ProductPriceProps) => {
  return (
    <SurfaceCard padding="none" className="flex flex-wrap items-baseline gap-3 px-5 py-[18px]">
      <span className="font-heading text-[26px] font-semibold text-foreground lg:text-[32px]">
        {formatProductPriceHelper(offer.price)}
      </span>

      {offer.oldPrice && (
        <span className="text-base text-muted-light line-through">
          {formatProductPriceHelper(offer.oldPrice)}
        </span>
      )}

      {discountPercent !== undefined && (
        <span className="ml-auto rounded-md bg-accent-soft px-2.5 py-1 text-[13px] font-semibold text-accent-dark">
          {PRODUCT_DISCOUNT_BADGE_LABEL(discountPercent)}
        </span>
      )}
    </SurfaceCard>
  );
};
