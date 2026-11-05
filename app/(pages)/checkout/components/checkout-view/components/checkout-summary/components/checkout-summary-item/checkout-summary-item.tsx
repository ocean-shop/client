import { formatCheckoutItemMetaHelper } from "@/app/(pages)/checkout/helpers/format-checkout-item-meta";
import { calculateProductDiscountPercentHelper } from "@/app/shared/products/helpers/calculate-product-discount-percent";
import { formatProductPriceHelper } from "@/app/shared/products/helpers/format-product-price";
import { ProductThumbnail } from "@/app/ui/product-thumbnail/product-thumbnail";
import type { CheckoutSummaryItemProps } from "./types/checkout-summary-item.types";

export const CheckoutSummaryItem = ({ item }: CheckoutSummaryItemProps) => {
  const hasDiscount =
    calculateProductDiscountPercentHelper(item.price, item.oldPrice) !== undefined;

  return (
    <div className="flex gap-3 border-b border-surface py-2.5 last:border-b-0">
      <ProductThumbnail
        image={item.image}
        alt={item.name}
        sizes="56px"
        className="h-14 w-14 rounded-[10px]"
      />

      <div className="flex min-w-0 flex-1 flex-col gap-[3px]">
        <span className="text-[13.5px] font-medium leading-[1.35] text-foreground">
          {item.name}
        </span>
        <span className="text-[12.5px] text-muted-light">{formatCheckoutItemMetaHelper(item)}</span>
      </div>

      <div className="flex flex-col items-end gap-px">
        {hasDiscount && item.oldPrice && (
          <span className="text-xs text-muted-light line-through">
            {formatProductPriceHelper(Number(item.oldPrice) * item.quantity)}
          </span>
        )}
        <span className="whitespace-nowrap text-sm font-semibold text-foreground">
          {formatProductPriceHelper(Number(item.price) * item.quantity)}
        </span>
      </div>
    </div>
  );
};
